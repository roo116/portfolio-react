import React, { useEffect } from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;
  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  // const categories = useState([{ name: "My Work" }, { name: "Resume" }]);

  // const handleClick = (item) => {
  //   return item;
  // };

  return (
    <header className="flex-row px-1">
      <h2>Chip Hill</h2>
      <nav>
        <ul className="d-flex flex-column flex-sm-row flex-wrap justify-content-around">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
            >
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
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
