
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import IssueCertificate from "./pages/IssueCertificate";
import Certificates from "./pages/Certificates";
import VerifyCertificate from "./pages/VerifyCertificate";
import initialCertificates from "./data/certificates";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [certificates, setCertificates] = useState(initialCertificates);

  function addCertificate(newCertificate) {
    setCertificates((previousCertificates) => [
      ...previousCertificates,
      newCertificate,
    ]);
  }

function revokeCertificate(certificateId) {
  setCertificates((previousCertificates) =>
    previousCertificates.map((certificate) =>
      certificate.id === certificateId
        ? { ...certificate, status: "Revoked" }
        : certificate
    )
  );
}


  return (
    <>
      <Navbar setPage={setPage} currentPage={page} />

      <main className="main-content">
        {page === "home" && <Home setPage={setPage} />}

        {page === "dashboard" && (
          <Dashboard setPage={setPage} certificates={certificates} />
        )}

        {page === "certificates" && (
         <Certificates
  certificates={certificates}
  revokeCertificate={revokeCertificate}
/>
        )}

        {page === "issue" && (
          <IssueCertificate
            setPage={setPage}
            addCertificate={addCertificate}
          />
        )}

        {page === "verify" && (
          <VerifyCertificate certificates={certificates} />
        )}
      </main>
    </>
  );
}

export default App;
