import React from "react";

const Footer = () => {
  const links = [
    { name: "linkedIn", href: "www.linkedin.com/in/karlhill" },
    {
      name: "Stack Overflow",
      href: "https://stackoverflow.com/users/18586610/chip-hill",
    },
  ];
  return (
    <section className="my-5">
      <div class="text-center m-2">
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
