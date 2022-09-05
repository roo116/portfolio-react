import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import ContactForm from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <ContactForm />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }

    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
