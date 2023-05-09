from . import projects
from ...db import get_prisma
from flask import request, jsonify, g


@projects.route("/<user_id>/", methods=["POST"])
async def add_project(user_id : int):
    prisma = await get_prisma()
    data = request.get_json()

    if "name" not in data:
        return jsonify({"error": "name is required"}), 400
    if "description" not in data:
        return jsonify({"error": "description is required"}), 400
    if "url" not in data:
        return jsonify({"error": "url is required"}), 400
    if "image" not in data:
        return jsonify({"error": "image is required"}), 400

    name = data["name"]
    description = data["description"]
    url = data["url"]
    image = data["image"]


    await prisma.project.create(
        data={
            "name": name,
            "description": description,
            "url": url,
            "image": image,
            "user": {
                "connect": {
                    "id": user_id
                }
            }
        }

    )
    return jsonify({"success": "Project created successfully"}), 200

