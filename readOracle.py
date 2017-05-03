# -*- coding: utf8 -*-
import cx_Oracle
import requests
import json
import os
#不加本句会出现中文编码问题！！！
os.environ['NLS_LANG'] = 'SIMPLIFIED CHINESE_CHINA.UTF8'

def a(date):
    host="xjtudlc_kq/it516kqdlc8tj@uc.xjtu.edu.cn/orcl.uc"
    connection=cx_Oracle.connect(host)
    cursor = connection.cursor()
    sql = """select * 
        from SIGNIN.CARD_SIGNIN 
        where node_name in ('西一楼','东二楼开发科','9楼') 
            and sign_date > to_date('%s','yyyy-mm-dd hh24:mi:ss') """% (date)
    # sql = """ select count(*) from SIGNIN.CARD_SIGNIN where sign_date > to_date('%s','yyyy-mm-dd hh24:mi:ss') """% (date)
    # sql = u""" select table_name from all_tables """
    # sql = sql.decode('utf8').encode('gbk')
    # sql = sql.encode('gbk').decode('utf8')
    # sql = sql.encode('utf8').decode('gbk')
    # sql = sql.encode('gbk')
    # sql = sql.encode('utf8')
    cursor.execute(sql) 
    res = [dict(person_name=row[0],id_num=row[1],node_name=row[2],sign_date=row[3])  for row in cursor]
    toReturn = dict(rs=res,date=date)
    print "finished!"
    cursor.close() 
    connection.close()
    return toReturn

latest = requests.get('http://checkin.9lou.org/get/new').json()
print latest['date']
# post_data = a(latest['date'])
post_data = a('2017-05-01 19:55:36')
r = requests.post("http://checkin.9lou.org/put/bulk",data=post_data)
print r

