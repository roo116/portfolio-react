import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";

function App() {
  const [selections] = useState([{ name: "Portfolio" }, { name: "Resume" }]);
  const [currentSelection, setCurrentSelection] = useState(selections[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        selections={selections}
        setCurrentSelection={setCurrentSelection}
        currentSelection={currentSelection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
