# -*- coding: utf8 -*-
import MySQLdb as mysql
import calendar
from datetime import datetime
from datetime import timedelta
def syn_student():
    db = mysql.connect(host='202.117.16.247',user='vivid',passwd='xjtudlc_PL<KI*()_',db='checkin',charset='utf8')
    cursor = db.cursor()
    #同步学号,年级
    cursor.execute('''select distinct id_num,person_name,group_id,
     CASE substring(id_num,1,4) WHEN "3114" THEN 3 WHEN "3115" THEN 2 WHEN "3116" THEN 1 ELSE 4 END as grade_id
     from check_in,lab_group where lab_group.sign_node_name = check_in.node_name''')
    for row in cursor.fetchall():
        cursor.execute('select count(*) from lab_student where stu_id = "%s"'%row[0])
        if(cursor.fetchone()[0] ==0):
            print(row[1])
            cursor.execute('insert into lab_student(stu_id,stu_name,group_id,grade_id) values(%d,"%s",%d,%d)'\
               %(int(row[0]),row[1],int(row[2]),int(row[3]) ))
            db.commit()

def compute_sign_count(stu_id,signs,db,cursor):
    dateMap=dict()
    for sign_date in signs:
        today = datetime.strptime(sign_date.date().isoformat(),'%Y-%m-%d')
        if(today in dateMap):
            dateMap[today].append(sign_date)
        else:
            dateMap[today]=[sign_date]
    loose=10
    eat=30
    time1=timedelta(minutes=30, hours=8)+timedelta(minutes=loose+1)
    time2=timedelta(minutes=40, hours=11)-timedelta(minutes=loose+1)
    time3=timedelta(minutes=20, hours=14)+timedelta(minutes=loose+1)
    time4=timedelta(minutes=40, hours=17)-timedelta(minutes=loose+1)
    time5=timedelta(minutes=0, hours=20)+timedelta(minutes=loose+1)
    time6=timedelta(minutes=10, hours=21)-timedelta(minutes=loose+1)
    for (today,list_sign_date) in dateMap.items():
        dict_sign_date=dict()
        for sign_date in list_sign_date:
            if(sign_date < today+time1):
                if('8:30' in dict_sign_date):
                    dict_sign_date['8:30'][0]=min(dict_sign_date['8:30'][0],sign_date)
                else:
                    dict_sign_date['8:30']=[sign_date]
            if(sign_date > today+time2 and sign_date < today+time3):
                if('11:40-14:20' not in dict_sign_date):
                    dict_sign_date['11:40-14:20']=[sign_date]
                elif((sign_date-dict_sign_date['11:40-14:20'][0]).seconds>eat*60):
                    dict_sign_date['11:40-14:20'].append(sign_date)
            if(sign_date > today+time4 and sign_date < today+time5):
                if('17:40-20:00' not in dict_sign_date):
                    dict_sign_date['17:40-20:00']=[sign_date]
                elif((sign_date-dict_sign_date['17:40-20:00'][0]).seconds>eat*60):
                    dict_sign_date['17:40-20:00'].append(sign_date)
            if(sign_date > today+time6):
                if('21:10' in dict_sign_date):
                    dict_sign_date['21:10'][0]=min(dict_sign_date['21:10'][0],sign_date)
                else:
                    dict_sign_date['21:10']=[sign_date]
        if(len(dict_sign_date.get('17:40-20:00',[today+time4]))>1 and '21:10' in dict_sign_date and
            (dict_sign_date['21:10'][0]-dict_sign_date['17:40-20:00'][1]).seconds<3*3600):
            dict_sign_date.pop('21:10')
        if(len(dict_sign_date.get('11:40-14:20',[today+time4]))>2):
            del dict_sign_date['11:40-14:20'][2:]
        if(len(dict_sign_date.get('17:40-20:00',[today+time2]))>2):
            del dict_sign_date['17:40-20:00'][2:]
        sign_count_tmp=0
        for (duration,value) in dict_sign_date.items():
            sign_count_tmp+=len(value)
        cursor.execute('insert into lab_sign_count(stu_id,sign_count,sign_date) values(%d,%d,"%s")'%(stu_id,sign_count_tmp,today.isoformat(" ")))
        db.commit()
        # print(today)
        # print (dict_sign_date)
def insert_sign_event(stu_id,max_date,db,cursor):
    cursor.execute(''' select sign_date,
            (case when time(sign_date) < '08:30:00' then 1 
                when time(sign_date) < '11:40:00' and time(sign_date) > '08:30:00' then 2
                when time(sign_date) < '14:20:00' AND time(sign_date) > '11:40:00' then 1
                when time(sign_date) < '17:40:00' and time(sign_date) > '14:20:00' then 2
                when time(sign_date) < '20:00:00' and time(sign_date) > '17:40:00' then 1
                when time(sign_date) < '21:10:00' and time(sign_date) > '20:00:00' then 2
                when time(sign_date) > '21:10:00' then 3 else 1
                     end) as sign_type 
                            from check_in 
                        where sign_date > "%s" and id_num = %d
                        order by sign_date '''%(max_date.isoformat(),stu_id))
    signs = cursor.fetchall()
    last_sign_date = datetime.strptime(max_date.isoformat(),'%Y-%m-%d')
    color_collection=['#5DCB77','#DA5F44']
    for sign in signs:
        color = sign[1]
        if(int(sign[1])==3):
            if((sign[0]-last_sign_date).seconds<3*3600):
                color=2
            else:
                color=1
        if((sign[0]-last_sign_date).seconds< 30*60):
            continue
        cursor.execute('insert into lab_event(start,color,stu_id) values("%s","%s",%d)'%(sign[0].isoformat(" "),color_collection[int(color)-1],stu_id))
        db.commit()
        last_sign_date=sign[0]

def syn_sign():
    db = mysql.connect(host='202.117.16.247',user='vivid',passwd='xjtudlc_PL<KI*()_',db='checkin',charset='utf8')
    cursor = db.cursor()
    cursor.execute('select stu_id,stu_name from lab_student')
    students = [dict(id=row[0], name=row[1]) for row in cursor.fetchall()]
    #增量计算event和sign_count
    for student in students:
        print (student['name'])
        cursor.execute('select max(sign_date) from lab_sign_count where stu_id = "%d"'%int(student['id']))
        max_date=cursor.fetchone()[0]
        if (max_date is None):
            cursor.execute('select min(sign_date) from check_in where id_num = "%d"'%int(student['id']))
            max_date = cursor.fetchone()[0]
            if(max_date is None ):
                continue
            #修正为当天零时
            max_date=max_date.date()
        else:
            #增量，修正为下一天
            tmp=max_date+timedelta(days=1)
            max_date=tmp.date()
            
        cursor.execute('select sign_date from check_in where id_num = "%d" and sign_date> "%s" order by sign_date'%(int(student['id']),max_date.isoformat()))
        signs = [row[0] for row in cursor.fetchall()]
        compute_sign_count(int(student['id']),signs,db,cursor)
        
        
        cursor.execute('select max(start) from lab_event where stu_id = "%d"'%int(student['id']))
        max_date=cursor.fetchone()[0]
        if (max_date is None):
            cursor.execute('select min(sign_date) from check_in where id_num = "%d"'%int(student['id']))
            max_date = cursor.fetchone()[0]
            if(max_date is None ):
                continue
            #修正为当天零时
            max_date=max_date.date()
        else:
            #增量，修正为下一天
            tmp=max_date+timedelta(days=1)
            max_date=tmp.date()
        insert_sign_event(int(student['id']),max_date,db,cursor)
    #     figureout_valid(signs)
    
    
        