
import { useState , useEffect} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import IssueCertificate from "./pages/IssueCertificate";
import Certificates from "./pages/Certificates";
import VerifyCertificate from "./pages/VerifyCertificate";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [certificates, setCertificates] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");


useEffect(() => {
  fetch("http://localhost:5555/certificates")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch certificates");
      }

      return response.json();
    })
    .then((data) => {
      setCertificates(data);
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

async function addCertificate(certificateData) {
  const response = await fetch("http://localhost:5555/certificates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(certificateData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to issue certificate");
  }

  setCertificates((previousCertificates) => [
    ...previousCertificates,
    data,
  ]);

  return data;
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
