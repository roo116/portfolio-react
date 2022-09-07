import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header className="flex-row space-between">
      <h1 className="mx-1 px-2 py-2">Chip Hill</h1>
      <ul
        className="nav flex-row space-around px-2 py-2"
        style={{ listStyle: "none", textDecoration: "none" }}
      >
        <li className="nav-item mx-2">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item mx-2">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
