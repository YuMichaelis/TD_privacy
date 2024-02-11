from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Initialisation de la base de données (à faire une seule fois)
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username TEXT, password TEXT)')
    conn.commit()
    conn.close()

# Fonction vulnérable à l'injection SQL
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    # Construction dynamique de la requête SQL avec les paramètres utilisateur
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    c.execute(query)
    result = c.fetchone()
    conn.close()
    if result:
        return jsonify({"message": "Login successful", "user": result[1]})
    else:
        return jsonify({"message": "Login failed"})

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
