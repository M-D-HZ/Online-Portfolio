import jwt

JWT_SECRET = "264429dcc27c25794290d38271e35067"

def generate_token():
    return jwt.encode({"username": "admin"}, JWT_SECRET, algorithm="HS256")