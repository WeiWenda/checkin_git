#coding:utf-8
# all the imports
import MySQLdb as mysql
from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash,jsonify, send_from_directory
import datetime
from checkin_related import checkin_related
import sys
reload(sys)
sys.setdefaultencoding('utf8')

# configuration
DATABASE = 'checkin'
DEBUG = True
HOST='202.117.16.247'
SECRET_KEY = 'development key'
USERNAME = 'vivid'
PASSWORD = 'xjtudlc_PL<KI*()_'

app = Flask(__name__,static_folder = 'static')
app.config.from_object(__name__)


# Register Pages
app.register_blueprint(checkin_related)

def connect_db():
    return mysql.connect(host=app.config['HOST'],user=app.config['USERNAME'],\
        passwd=app.config['PASSWORD'],db=app.config['DATABASE'],charset='utf8')

def get_cursor():
    return g.db.cursor()

@app.before_request
def before_request():
    g.db = connect_db()
    g.cursor = get_cursor()

@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()
        g.cursor.close()


# def add_entry():
#     if not session.get('logged_in'):
#         abort(401)
#     g.cursor.execute('insert into blog (title, content) values (?, ?)',
#                  [request.form['title'], request.form['content']])
#     g.db.commit()
#     flash('New content was successfully posted')
#     return redirect(url_for('show_entries'))
   
if __name__ == '__main__':
	app.run(host='0.0.0.0',port=61213)