import React from "react";

function Portfolio() {
  const project = [
    {
      title: "jokr",
      description:
        "Team collaboration utilizing MVC, with sequelize, mySql, JawsDB/Heroku, express, node.js, handlebars.",
      github: "https://github.com/roo116/jokr",
      link: "https://damp-bastion-89209.herokuapp.com/",
    },
  ];

  return (
    <section>
      <div>
        <div className="card-body">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          <a href={project.link}>Link</a>
          <a href={project.gitub}>GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
