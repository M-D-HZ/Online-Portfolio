from . import projects
from ...db import get_prisma
from flask import request, jsonify, g

@projects.route("/", methods=["GET"])
async def get_projects():
    prisma = await get_prisma()
    projects = await prisma.project.find_many()
    return jsonify(projects), 200