from flask import Flask, request, jsonify

app = Flask(__name__)

# Simulons une base de données d'utilisateurs en mémoire
users_db = {
    "admin": {"password": "admin123", "role": "admin"},
    "user": {"password": "user123", "role": "user"}
}

# Simulons une ressource sensible
sensitive_data = "Very Secret Information"

@app.route('/data', methods=['GET'])
def get_data():
    username = request.args.get('username')
    password = request.args.get('password')
    
    # Tentative de vérification des droits d'accès
    if username in users_db and users_db[username]['password'] == password:
        user_role = users_db[username]['role']
        # Ici réside la vulnérabilité: une mauvaise logique permet à tout utilisateur vérifié d'accéder à des données sensibles
        if user_role == "user":  # La vérification est incorrecte, elle devrait être if user_role == "admin":
            return jsonify({"error": "Access denied"}), 403
        return jsonify({"data": sensitive_data}), 200
    else:
        return jsonify({"error": "Unauthorized"}), 401

if __name__ == '__main__':
    app.run(debug=True)
