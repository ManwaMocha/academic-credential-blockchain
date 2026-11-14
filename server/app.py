
from flask import Flask, jsonify
from flask_cors import CORS
from config import db, migrate
from models import Certificate

app = Flask(__name__)

# Database configuration
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Allow React to communicate with Flask
CORS(app, origins=["http://localhost:5173"])

# Initialize database and migrations
db.init_app(app)
migrate.init_app(app, db)


@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "message": "CertiChain API is running",
        "status": "success"
    }), 200


if __name__ == "__main__":
    app.run(debug=True, port=5555)
