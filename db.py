import sqlite3
#create db connection
conn = sqlite3.connect("usuarios.sqlite")
#create the db cursor object
cursor = conn.cursor()
#create sql table creation query
sql_query = """ CREATE TABLE users (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL
)"""

cursor.execute(sql_query)
