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
    <section className="my-5">
        <div class="text-center m-2">
           <a href="https://docs.google.com/document/d/e/2PACX-1vTzFpiPtLClTnhZyYY-DKrNH-FZ9fWSdl4YhFe45V8oK05tW8-066KhcwXtD9mTzAVRF-p9l7lfjSH7/pub" target="_blank" rel="noreferrer" class="m-2 p-1 text-light">Download resume</a>
          </div>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
