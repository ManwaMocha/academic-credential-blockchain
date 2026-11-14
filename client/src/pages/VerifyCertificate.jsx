
import { useState } from "react";

function VerifyCertificate({certificates}) {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  function handleVerify(event) {
    event.preventDefault();

    const certificate = certificates.find(
      (cert) =>
        cert.id.toLowerCase() === certificateId.trim().toLowerCase()
    );

    setResult(certificate || null);
    setSearched(true);
  }

  return (
    <div className="verify-page">
      <div className="page-heading">
        <h1>Verify Certificate</h1>
        <p>
          Check the authenticity and status of an academic
          certificate using its unique certificate ID.
        </p>
      </div>

      <div className="verify-container">
        <form onSubmit={handleVerify} className="verify-form">
          <label>Certificate ID</label>

          <input
            type="text"
            placeholder="e.g. CERT-001"
            value={certificateId}
            onChange={(event) => {
              setCertificateId(event.target.value);
              setSearched(false);
              setResult(null);
            }}
            required
          />

          <button type="submit" className="primary-btn">
            Verify Certificate
          </button>
        </form>

        {searched && result && (
          <div className="verification-result">
            <h2>Certificate Found</h2>

            <span
              className={
                result.status === "Valid"
                  ? "status valid"
                  : "status revoked"
              }
            >
              {result.status}
            </span>

            <div className="result-details">
              <p><strong>Certificate ID:</strong> {result.id}</p>
              <p><strong>Student:</strong> {result.studentName}</p>
              <p><strong>Course:</strong> {result.course}</p>
              <p><strong>Institution:</strong> {result.institution}</p>
              <p><strong>Issue Date:</strong> {result.issueDate}</p>
            </div>

            <p className="demo-notice">
              Demo verification only. Blockchain verification
              will be added later.
            </p>
          </div>
        )}

        {searched && !result && (
          <div className="verification-error">
            <h3>Certificate Not Found</h3>
            <p>
              No certificate matches the ID you entered.
              Please check the certificate ID and try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyCertificate;
