


function Dashboard({ setPage, certificates }) {
  const totalCertificates = certificates.length;

  const validCertificates = certificates.filter(
    (certificate) => certificate.status === "Valid"
  ).length;

  const revokedCertificates = certificates.filter(
    (certificate) => certificate.status === "Revoked"
  ).length;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>University Dashboard</h1>
          <p>Manage and monitor academic certificates.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setPage("issue")}
        >
          + Issue Certificate
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Certificates</h3>
          <h2>{totalCertificates}</h2>
          <p>Certificates in the system</p>
        </div>

        <div className="stat-card">
          <h3>Valid Certificates</h3>
          <h2>{validCertificates}</h2>
          <p>Currently valid records</p>
        </div>

        <div className="stat-card">
          <h3>Revoked Certificates</h3>
          <h2>{revokedCertificates}</h2>
          <p>Certificates marked as revoked</p>
        </div>
      </div>

      <div className="recent-section">
        <div className="section-header">
          <h2>Recent Certificates</h2>

          <button onClick={() => setPage("certificates")}>
            View All
          </button>
        </div>

        <div className="table-container">
          <table className="certificate-table">
            <thead>
              <tr>
                <th>Certificate ID</th>
                <th>Student</th>
                <th>Course</th>
                <th>Issue Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {certificates.map((certificate) => (
                <tr key={certificate.id}>
                  <td>{certificate.id}</td>
                  <td>{certificate.studentName}</td>
                  <td>{certificate.course}</td>
                  <td>{certificate.issueDate}</td>
                  <td>
                    <span
                      className={
                        certificate.status === "Valid"
                          ? "status valid"
                          : "status revoked"
                      }
                    >
                      {certificate.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
