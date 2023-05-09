from . import home
from ..db import get_prisma
from flask import g, request, jsonify

@home.route("/<user_id>/Work_experience", methods=["POST"])
def add_Workexperience(user_id : int):
    prisma = get_prisma()
    data = request.get_json()

    if "company" not in data:
        return jsonify({"error": "company is required"}), 400
    if "position" not in data:
        return jsonify({"error": "position is required"}), 400
    if "start_date" not in data:
        return jsonify({"error": "start_date is required"}), 400

    company = data["company"]
    position = data["position"]
    start_date = data["start_date"]

    await prisma.workexperience.create(
        data={
            "company": company,
            "position": position,
            "start_date": start_date,
            "user": {
                "connect": {
                    "id": user_id
                }
            }
        }
    )

    return jsonify({"success": "Work experience created successfully"}), 200
