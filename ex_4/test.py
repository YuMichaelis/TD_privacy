from flask import Flask, request
import pickle

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    # Présume que le corps de la requête est un objet pickle sérialisé
    obj = request.data
    try:
        # Désérialise l'objet sans valider sa sécurité
        data = pickle.loads(obj)
        # Traitement hypothétique de l'objet désérialisé
        return "Object received and processed", 200
    except Exception as e:
        return f"Error processing object: {str(e)}", 400

if __name__ == '__main__':
    app.run(debug=True)
