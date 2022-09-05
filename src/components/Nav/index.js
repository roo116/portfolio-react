/* eslint-disable */
import React from "react";
function Nav(props) {
  const {
    selections = [],
    setCurrentSelection,
    currentSelection,
    setContactSelected,
    contactSelected,
  } = props;

  return (
    <header className="flex-row">
      <h2>
        <span>Chip Hill</span>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {selections.map((selection) => (
            <li
              className={`mx-2 ${
                currentSelection.name === selection.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={selection.name}
            >
              <a href={selection.href}>{selection.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

// function Nav(props) {
//   const { categories = [], setCurrentCategory, currentCategory } = props;
//   useEffect(() => {
//     document.title = currentCategory.name;
//   }, [currentCategory]);

//   // const categories = useState([{ name: "My Work" }, { name: "Resume" }]);

//   // const handleClick = (item) => {
//   //   console.log(item);
//   //   return item;
//   // };

//   return (
//     <header className="flex-row px-1">
//       <h2>Chip Hill</h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a data-testid="about" href="#about">
//               About me
//             </a>
//           </li>
//           <li className="mx-2">
//             <span>Contact</span>
//           </li>
//           {categories.map((category) => (
//             <li
//               className={`mx-1 ${
//                 currentCategory.name === category.name && "navActive"
//               }`}
//               key={category.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentCategory(category);
//                 }}
//               >
//                 {category.name}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

/* <li className="mx-2"> */
/* <a href="#about">About Me</a> */
// </li>
// <li className="mx-2">
// <a href="#contact">Contact Me</a>
// </li>
// <li className="mx-2">
// <a href="#portfolio">My Work</a>
// </li>
// <li className="mx-2">
// <a href="#resume">My Resume</a>
// </li>

  // const selections = [
  //   { name: "About Me", href: "#about" },
  //   { name: "Contact Me", href: "#contact" },
  //   { name: "Portfolio", href: "#portfolio" },
  //   { name: "My Resume", href: "#resume" },
  // ];