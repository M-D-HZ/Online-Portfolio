from . import dashboard
from flask import request, jsonify
from ...db import get_prisma
from flask import make_response
from ...utils import generate_token

@dashboard.route('/dashboard/login', methods=['POST'])
def handle_login():
    try:
        prisma = get_prisma()
        data = request.get_json()
        username = data['username']
        password = data['password']

        # Default username and password
        if username == "Anass" and password == "Anass":
            resp = make_response()
            resp.set_cookie("token", generate_token(username))
            return resp

        # check if user exists
        find = prisma.admin.find_first(
            where={
                'username': username,
                'password': password
            },
        )

        # user rejected
        if find is None:
            return {'error': 'Credentials do not match an existing user!'}, 401
        else:
            # user accepted
            resp = make_response()
            resp.set_cookie("token", generate_token(username))
            return resp
    except:
        return {"error": "Internal server error"}, 500
