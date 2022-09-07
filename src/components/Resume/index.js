import React from "react";

const Resume = () => {
  const skills = [
    { name: "scrum (CSM)" },
    { name: "SaFE" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Javascript" },
    { name: "JQuery" },
    { name: "MongoDB" },
    { name: "mySql" },
    { name: "React" },
    { name: "Project Management" },
    { name: "Leadership" },
    { name: "Service Management" },
  ];
  return (
    <section id="resume-section" className="my-5">
      <div>
        <h5 style={{ textAlign: "center" }}>Skills</h5>
        <ul className="resume-skills-list">
          {skills.map((skill) => (
            <li key={skill.name} style={{ textAlign: "center" }}>
              {skill.name}
            </li>
          ))}
          <li style={{ textAlign: "center", textDecoration: "none" }}>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vTzFpiPtLClTnhZyYY-DKrNH-FZ9fWSdl4YhFe45V8oK05tW8-066KhcwXtD9mTzAVRF-p9l7lfjSH7/pub"
              target="_blank"
              rel="noreferrer"
              className="m-2 p-1 text-light"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
