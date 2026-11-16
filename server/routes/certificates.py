
from flask import Blueprint, jsonify, request
from datetime import date
from uuid import uuid4

from config import db
from models import Certificate

certificates_bp = Blueprint("certificates", __name__)


@certificates_bp.route("/certificates", methods=["GET"])
def get_certificates():
    certificates = Certificate.query.all()

    return jsonify([
        certificate.to_dict()
        for certificate in certificates
    ]), 200
@certificates_bp.route("/certificates", methods=["POST"])
def create_certificate():
    data = request.get_json(silent=True) or {}

    required_fields = [
        "studentName",
        "studentId",
        "course",
        "institution",
        "issueDate"
    ]

    for field in required_fields:
        if not isinstance(data.get(field), str) or not data[field].strip():
            return jsonify({
                "error": f"{field} is required"
            }), 400

    try:
        issue_date = date.fromisoformat(data["issueDate"])
    except ValueError:
        return jsonify({
            "error": "Invalid date. Use YYYY-MM-DD"
        }), 400

    certificate = Certificate(
        certificate_id=f"CERT-{uuid4().hex[:12].upper()}",
        student_name=data["studentName"].strip(),
        student_id=data["studentId"].strip(),
        course=data["course"].strip(),
        institution=data["institution"].strip(),
        issue_date=issue_date,
        status="Valid"
    )

    db.session.add(certificate)
    db.session.commit()

    return jsonify(certificate.to_dict()), 201

@certificates_bp.route(
    "/certificates/<string:certificate_id>/revoke",
    methods=["PATCH"]
)
def revoke_certificate(certificate_id):

    certificate = Certificate.query.filter_by(
        certificate_id=certificate_id
    ).first()

    if certificate is None:
        return jsonify({
            "error": "Certificate not found"
        }), 404

    if certificate.status == "Revoked":
        return jsonify({
            "error": "Certificate is already revoked"
        }), 409

    certificate.status = "Revoked"

    db.session.commit()

    return jsonify(certificate.to_dict()), 200