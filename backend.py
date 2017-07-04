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

def compute_sign_count(stu_id,today,cursor): 
    loose=10
    eat = 0
    time1=timedelta(minutes=30, hours=8)+timedelta(minutes=loose+1)
    time2=timedelta(minutes=40, hours=11)-timedelta(minutes=loose+1)
    time3=timedelta(minutes=20, hours=14)+timedelta(minutes=loose+1)
    time4=timedelta(minutes=40, hours=17)-timedelta(minutes=loose+1)
    time5=timedelta(minutes=0, hours=20)+timedelta(minutes=loose+1)
    time6=timedelta(minutes=10, hours=21)-timedelta(minutes=loose+1)
    cursor.execute('''select sign_date from check_in where stu_id = "%s" and sign_date > "%s" and sign_date <= "%s" '''%(stu_id,today.isoformat(" "),datetime.now().isoformat(" ")))
    list_sign_date =[row[0] for row in  cursor.fetchall()]
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
    return sign_count_tmp

def insert_sign_event(stu_id,max_date,db,cursor):
    eat=0
    former_time = max_date-timedelta(minutes=eat)
    cursor.execute(''' select c.sign_date
                        from check_in as c
                        where c.sign_date >= "%s" and c.stu_id = "%s"
                '''%(former_time.strftime("%Y-%m-%d %H:%M:%S"),stu_id))
    if len(cursor.fetchall()) > 0:
        return '重复刷卡无效！'
    else:
        cursor.execute("""
                    insert into check_in
                      (stu_id, sign_date)
                      values ("%s","%s")""" % (stu_id,max_date.strftime("%Y-%m-%d %H:%M:%S")))
        db.commit()
        cursor.execute(''' select c.sign_date,
            (case when time(c.sign_date) < '08:30:00' then 1 
                when time(c.sign_date) < '11:40:00' and time(c.sign_date) > '08:30:00' then 2
                when time(c.sign_date) < '14:20:00' AND time(c.sign_date) > '11:40:00' then 1
                when time(c.sign_date) < '17:40:00' and time(c.sign_date) > '14:20:00' then 1
                when time(c.sign_date) < '20:00:00' and time(c.sign_date) > '17:40:00' then 1
                when time(c.sign_date) < '21:10:00' and time(c.sign_date) > '20:00:00' then 2
                when time(c.sign_date) > '21:10:00' then 1 else 1
                     end) as sign_type 
                        from check_in as c
                        where c.sign_date >= "%s" and c.stu_id = "%s"
                '''%(max_date.strftime("%Y-%m-%d %H:%M:%S"),stu_id))
        sign = cursor.fetchall()[0]
        color_collection=['#5DCB77','#DA5F44']
        color = sign[1]
        today = datetime.strptime(max_date.date().isoformat(),'%Y-%m-%d')
        cursor.execute('insert into lab_event(start,color,stu_id) values("%s","%s","%s")'%(sign[0].isoformat(" "),color_collection[int(color)-1],stu_id))
        db.commit()
        if color == 2:
            return '已迟到'
        cursor.execute('select sign_count from lab_sign_count where stu_id = "%s" and sign_date = "%s"'%(stu_id,today.isoformat(" ")))
        result = cursor.fetchone()
        if result:
            if(int(result[0])==6):
                return '已满勤，干的漂亮！'
            cursor.execute('update lab_sign_count set sign_count = %d where sign_date = "%s" and stu_id = "%s"'%(compute_sign_count(stu_id,today,cursor),today.isoformat(" "),stu_id))
            db.commit()
        else:
            cursor.execute('insert into lab_sign_count(stu_id,sign_count,sign_date) values("%s",%d,"%s")'%(stu_id,1,today.isoformat(" ")))
            db.commit()
        return  '打卡有效'