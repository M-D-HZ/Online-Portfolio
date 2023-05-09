from . import home
from ..db import get_prisma
from flask import g, request, jsonify

@home.route("/<user_id>/Skills", methods=["POST"])
def add_Skills(user_id : int):
    prisma = get_prisma()
    data = request.get_json()

    if "skill" not in data:
        return jsonify({"error": "skill is required"}), 400
    if "level" not in data:
        return jsonify({"error": "level is required"}), 400

    skill = data["skill"]
    level = data["level"]

    await prisma.skills.create(
        data={
            "skill": skill,
            "level": level,
            "user": {
                "connect": {
                    "id": user_id
                }
            }
        }
    )

    return jsonify({"success": "Skills created successfully"}), 200