
import { useState } from "react";
import CertificateCard from "../components/CertificateCard";

function Certificates({certificates,  revokeCertificate}) {
  const [search, setSearch] = useState("");

  const filteredCertificates = certificates.filter((certificate) => {
    return (
      certificate.studentName.toLowerCase().includes(search.toLowerCase()) ||
      certificate.id.toLowerCase().includes(search.toLowerCase()) ||
      certificate.course.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="certificates-page">
      <div className="page-heading">
        <h1>All Certificates</h1>
        <p>View and search academic certificates.</p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by student, certificate ID, or course..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="certificates-grid">
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
               revokeCertificate={revokeCertificate}
            />
          ))
        ) : (
          <p>No certificates found.</p>
        )}
      </div>
    </div>
  );
}

export default Certificates;
