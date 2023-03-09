from flask import Flask, send_from_directory
# from flask_cors import CORS #comment this on deployment

app = Flask(__name__, static_url_path='', static_folder='../public')
# CORS(app) #comment this on deployment


@app.route('/', defaults={'path': ''})
def catch_all(path):
    print(path)
    return send_from_directory(app.static_folder,'index.html')
    
# @app.route("/*")
# def serve():
