
import { useState } from "react";

function IssueCertificate({ setPage, addcertificate }) {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [course, setCourse] = useState("");
  const [institution, setInstitution] = useState("KCA University");
  const [issueDate, setIssueDate] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!studentName || !studentId || !course || !institution || !issueDate) {
      setMessage("Please fill in all fields.");
      return;
    }

   const certificateData = {
  studentName,
  studentId,
  course,
  institution,
  issueDate,
};

try {
  const savedCertificate = await addCertificate(certificateData);

  setMessage(
    `Certificate ${savedCertificate.id} saved successfully!`
  );

  setStudentName("");
  setStudentId("");
  setCourse("");
  setIssueDate("");
} catch (error) {
  setMessage(error.message);
}
  }

  return (
    <div className="issue-page">
      <div className="page-heading">
        <h1>Issue Certificate</h1>
        <p>
          Enter the student's academic information to create
          a new certificate.
        </p>
      </div>

      <div className="issue-form-container">
        <form onSubmit={handleSubmit} className="issue-form">
          <label>Student Full Name</label>
          <input
            type="text"
            placeholder="e.g. John Kamau"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />

          <label>Student ID</label>
          <input
            type="text"
            placeholder="e.g. 22/12345"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />

          <label>Course / Programme</label>
          <input
            type="text"
            placeholder="e.g. Bachelor of Information Technology"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />

          <label>Institution</label>
          <input
            type="text"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />

          <label>Issue Date</label>
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            required
          />

          <button type="submit" className="primary-btn">
            Issue Certificate
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>

      <button
        className="back-btn"
        onClick={() => setPage("dashboard")}
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}

export default IssueCertificate;
