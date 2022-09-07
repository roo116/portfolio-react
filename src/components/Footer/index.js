import React from "react";

const Footer = () => {
  const links = [
    { name: "linkedIn", href: "www.linkedin.com/in/karlhill" },
    {
      name: "Stack Overflow",
      href: "https://stackoverflow.com/users/18586610/chip-hill",
    },
    {
      name: "GitHub",
      href: "https://github.com/roo116"
    }
  ];
  return (
    <footer>
      <div className="text-center m-2">
        <ul
          className="nav flex-row space-evenly"
          style={{ listStyle: "none", textDecoration: "none" }}
        >
          {links.map((link) => (
            <li className="nav nav-item" key={link.name}>
              <a href={link.href} className="mx-2 px-2">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
