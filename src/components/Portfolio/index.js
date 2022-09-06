import React from "react";


function Portfolio() {
  const projects = [
    {
      title: "jokr",
      description:
        "Team collaboration utilizing MVC, with sequelize, mySql, JawsDB/Heroku, express, node.js, handlebars.",
      github: "https://github.com/roo116/jokr",
      link: "https://damp-bastion-89209.herokuapp.com/",
    },
    {
      title: "note-taker",
      description:
        "Note application. Utilizes express.js and published to Heroku.",
      github: "https://github.com/roo116/note-taker",
      link: "https://upper-mountie-24559.herokuapp.com/",
    },
    {
      title: "Futurama Character Search",
      description:
        "Team collaboration utilizing materialize css, and API calls to create a character-search app. Displays the voice-actors behind the characters of Futurama, an animated TV series.",
      github: "https://github.com/roo116/character-search",
      link: "https://roo116.github.io/character-search/",
    },
    {
      title: "Weather Dashboard",
      description:
        "Utilized BootStrap and Weather One api to create a weather dashboard with realtime weather updates, at a click of a button.",
      github: "https://github.com/roo116/weather-dashboard",
      link: "https://roo116.github.io/weather-dashboard/",
    },
    {
      title: "Work-Day Scheduler",
      description:
        "Utilized JQuery, localStorage and Third-party utilities to create a scheduling application.",
      github: "https://github.com/roo116/work-day-scheduler",
      link: "https://roo116.github.io/work-day-scheduler/",
    },
    {
      title: "Code-Quiz",
      description:
        " Sample on-line quiz.  Example of dynamic html creation using JavaScript.",
      github: "https://github.com/roo116/code-quiz",
      link: "https://roo116.github.io/code-quiz/",
    },
  ];
  return (
    <section id="projects">
      <h1>My Work</h1>
      <div className="flex-row space-around">
        {projects.map((project, i) => (
          <div className="card" key={project.title}>
            <div>
              <img
                src={require(`../../assets/img/project/${i}.jpg`).default}
                alt={project.title}
              />
            </div>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              Application
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
