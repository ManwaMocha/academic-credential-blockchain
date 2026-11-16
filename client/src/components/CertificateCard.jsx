
function CertificateCard({ certificate, revokeCertificate }) {
 async function handleRevoke() {
  const confirmed = window.confirm(
    `Are you sure you want to revoke ${certificate.id}?`
  );

  if (!confirmed) {
    return;
  }

  try {
    await revokeCertificate(certificate.id);
  } catch (error) {
    alert(error.message);
  }
}

  return (
    <div className="certificate-card">
      <div className="certificate-card-header">
        <h3>{certificate.studentName}</h3>

        <span
          className={
            certificate.status === "Valid"
              ? "status valid"
              : "status revoked"
          }
        >
          {certificate.status}
        </span>
      </div>

      <p>
        <strong>Certificate ID:</strong> {certificate.id}
      </p>

      <p>
        <strong>Course:</strong> {certificate.course}
      </p>

      <p>
        <strong>Institution:</strong> {certificate.institution}
      </p>

      <p>
        <strong>Issue Date:</strong> {certificate.issueDate}
      </p>

      {certificate.status === "Valid" && (
        <button
          className="revoke-btn"
          onClick={handleRevoke}
        >
          Revoke Certificate
        </button>
      )}
    </div>
  );
}

export default CertificateCard;
