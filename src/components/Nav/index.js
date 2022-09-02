import React from "react";

function Nav() {
  const categories = [{ name: "My Work" }, { name: "Resume" }];

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>Chip Hill</h2>
      <nav>
        <ul className="d-flex flex-column flex-sm-row flex-wrap justify-content-around">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => handleClick("About")}
            >
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick("Contact")}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick(category.name);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
