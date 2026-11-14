
from config import db


class Certificate(db.Model):
    __tablename__ = "certificates"

    id = db.Column(db.Integer, primary_key=True)
    certificate_id = db.Column(db.String(100), unique=True, nullable=False)
    student_name = db.Column(db.String(150), nullable=False)
    student_id = db.Column(db.String(100), nullable=False)
    course = db.Column(db.String(200), nullable=False)
    institution = db.Column(db.String(150), nullable=False)
    issue_date = db.Column(db.Date, nullable=False)
    status = db.Column(db.String(20), default="Valid", nullable=False)

    def to_dict(self):
        return {
            "id": self.certificate_id,
            "studentName": self.student_name,
            "studentId": self.student_id,
            "course": self.course,
            "institution": self.institution,
            "issueDate": self.issue_date.isoformat(),
            "status": self.status,
        }
