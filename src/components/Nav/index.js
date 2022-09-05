/* eslint-disable */
import React from "react";
function Nav() {
  const selections = [
    { name: "About Me", href: "#about" },
    { name: "Contact Me", href: "#contact" },
    { name: "My Work", href: "#portfolio" },
    { name: "My Resume", href: "#resume" },
  ];
  return (
    <header className="flex-row">
      <h2>
        <span>Chip Hill</span>
      </h2>
      <nav>
        <ul className="flex-row">
          {selections.map((selection) => (
            <li className="mx-2" key={selection.name}>
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
