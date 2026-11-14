
function Home({ setPage }) {
  return (
    <div className="home">
      <section className="hero">
        <h1>Secure Academic Credentials with Blockchain</h1>

        <p>
          CertiChain is a blockchain-based academic certificate
          verification platform that helps universities issue
          secure certificates and allows employers to verify
          their authenticity.
        </p>

        <div className="hero-buttons">
          <button onClick={() => setPage("verify")}>
            Verify Certificate
          </button>

          <button onClick={() => setPage("issue")}>
            Issue Certificate
          </button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose CertiChain?</h2>

        <div className="feature-cards">
          <div className="feature-card">
            <h3>Secure Certificates</h3>
            <p>
              Blockchain records help protect certificate
              information from unauthorized changes.
            </p>
          </div>

          <div className="feature-card">
            <h3>Easy Verification</h3>
            <p>
              Employers can quickly check whether an academic
              certificate is authentic.
            </p>
          </div>

          <div className="feature-card">
            <h3>Transparent Records</h3>
            <p>
              Certificate verification records can be checked
              without relying entirely on manual processes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
