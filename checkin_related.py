# -*- coding: utf8 -*-
import os
from flask import Blueprint, render_template, abort,Flask, request, session, g, redirect, url_for,flash,jsonify,request 
from datetime import datetime
import MySQLdb as mysql
from backend import syn_sign,syn_student
import sys
reload(sys)
sys.setdefaultencoding('utf8')
checkin_related = Blueprint("checkin_related", __name__, template_folder="templates")

@checkin_related.route('/')
def Checkin():
    if request.method=='GET':
        g.cursor.execute('select group_id,group_name from lab_group order by group_id')
        entries = [dict(id=row[0], name=row[1]) for row in g.cursor.fetchall()]
        return render_template('Checkin.html',entries=entries)
@checkin_related.route('/syn_sign',methods=['POST'])
def Checkin_sys_sign():
    if(request.form.get('password',"") == 'xueshubu2016'):
        syn_sign()
        return jsonify({'success':True})
    else:
        return jsonify({'success':False})

@checkin_related.route('/syn_student',methods=['POST'])
def Checkin_sys_student():
    if(request.form.get('password',"") == 'xueshubu2016'):
        syn_student()
        return jsonify({'success':True})
    else:
        return jsonify({'success':False})
    
@checkin_related.route('/stu_list',methods=['POST','GET'])
def Checkin_Stu_List():
    groupid=int(request.form['id'])
    g.cursor.execute('select stu_id,stu_name,bg_color from lab_student,lab_grade where group_id = %d  and lab_student.grade_id = lab_grade.grade_id order by lab_student.grade_id '% groupid)
    entries = [dict(id=row[0], name=row[1],color=row[2]) for row in g.cursor.fetchall()]
    return jsonify(entries)

@checkin_related.route('/stu_detail',methods=['GET','POST'])
def Checkin_Stu_Detail():
    start = request.args.get('start')
    end = request.args.get('end')
    stu_id = int(request.args.get('stu_id'))
    g.cursor.execute('select start,color from lab_event where  stu_id = %s and start between %s and %s ',(stu_id,start,end))
    ret = [dict(start=row[0].isoformat(" "),backgroundColor=row[1],borderColor=row[1]) for row in g.cursor.fetchall()]
    return jsonify(ret)

@checkin_related.route('/count_detail',methods=['GET','POST'])
def Checkin_Count_Detail():
    start = request.form['ds']
    end = request.form['de']
    g.cursor.execute('select lab_group.group_id,ifnull(count_exist,0) from (select lab_group.group_id,avg(count_sum) as count_exist from (select stu_id,sum(sign_count) as count_sum from lab_sign_count where sign_date between %s and %s group by stu_id ) as stu_count,lab_group,lab_student where stu_count.stu_id = lab_student.stu_id AND lab_student.group_id = lab_group.group_id group by lab_group.group_id ) as group_count right OUTER JOIN lab_group on group_count.group_id = lab_group.group_id order by lab_group.group_id',(start,end))
    group_count=[int(row[1]) for row in g.cursor.fetchall()]
    g.cursor.execute('select group_id,group_name from lab_group order by group_id')
    group_name = [row[1][:-2] for row in g.cursor.fetchall()]
    ret = dict(row=group_name,col=group_count)
    return jsonify(ret)

@checkin_related.route('/count_group',methods=['GET','POST'])
def Checkin_Count_Group():
    group_id = int( request.args.get('id'))
    start = request.form['ds']
    end = request.form['de']
    g.cursor.execute('select s.stu_id,s.stu_name,sum(sign_count) as count_sum from lab_sign_count as c,lab_student as s,lab_group as g where c.sign_date between "%s" and  "%s" and c.stu_id = s.stu_id and s.group_id = g.group_id and g.group_id = %d group by s.stu_id,s.stu_name order by s.grade_id'%(start,end,group_id))
    result=g.cursor.fetchall()
    group_count=[int(row[2]) for row in result]
    group_name = [row[1] for row in result]
    ret = dict(row=group_name,col=group_count)
    return jsonify(ret)

@checkin_related.route('/count_stu',methods=['GET','POST'])
def Checkin_Count_Student():
    student_id = int( request.args.get('id'))
    start = request.form['ds']
    end = request.form['de']
    g.cursor.execute('select sign_date,sign_count from lab_sign_count  where stu_id = %d  and sign_date between "%s" and "%s" order by sign_date'%(student_id,start,end))
    result=g.cursor.fetchall()
    group_count=[int(row[1]) for row in result]
    group_name = [row[0].strftime('%m-%d') for row in result]
    ret = dict(row=group_name,col=group_count)
    return jsonify(ret)