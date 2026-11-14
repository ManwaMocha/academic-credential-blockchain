
from datetime import date
from app import app
from config import db
from models import Certificate

certificates = [
    {
        "certificate_id": "CERT-001",
        "student_name": "John Kamau",
        "student_id": "22/12345",
        "course": "Bachelor of Information Technology",
        "institution": "KCA University",
        "issue_date": date(2026, 9, 15),
        "status": "Valid"
    },
    {
        "certificate_id": "CERT-002",
        "student_name": "Mary Wanjiku",
        "student_id": "22/12346",
        "course": "Bachelor of Commerce",
        "institution": "KCA University",
        "issue_date": date(2026, 9, 20),
        "status": "Valid"
    },
    {
        "certificate_id": "CERT-003",
        "student_name": "Peter Otieno",
        "student_id": "22/12347",
        "course": "Bachelor of Science in Computer Science",
        "institution": "KCA University",
        "issue_date": date(2026, 10, 1),
        "status": "Revoked"
    },
    {
        "certificate_id": "CERT-004",
        "student_name": "Grace Achieng",
        "student_id": "22/12348",
        "course": "Bachelor of Business Administration",
        "institution": "KCA University",
        "issue_date": date(2026, 10, 10),
        "status": "Valid"
    }
]

with app.app_context():
    for data in certificates:
        existing = Certificate.query.filter_by(
            certificate_id=data["certificate_id"]
        ).first()

        if not existing:
            certificate = Certificate(**data)
            db.session.add(certificate)

    db.session.commit()
    print("Database seeded successfully!")
