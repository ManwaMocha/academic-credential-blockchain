
function Navbar({ setPage, currentPage }) {
  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => setPage("home")}>
        CertiChain
      </h2>

      <div className="nav-links">
        <button
          className={currentPage === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={currentPage === "certificates" ? "active" : ""}
          onClick={() => setPage("certificates")}
        >
          Certificates
        </button>

        <button
          className={currentPage === "issue" ? "active" : ""}
          onClick={() => setPage("issue")}
        >
          Issue Certificate
        </button>

        <button
          className={currentPage === "verify" ? "active" : ""}
          onClick={() => setPage("verify")}
        >
          Verify Certificate
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
