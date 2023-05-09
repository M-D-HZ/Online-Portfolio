from flask import Flask
from routes import auth

app = Flask(__name__)

app.register_blueprint(auth)

def run():
    pass


if __main__ == "__main__":
    run()