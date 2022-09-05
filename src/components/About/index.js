import React from "react";
import coverImage from "../../assets/img/lync_photo_bw.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100px" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          {/* {" "} */}
          Seeking to build web applications and grow as a developer. Skills
          include - JavaScript, CSS, JQuery, responsive web design, Node.js,
          Express, mySql. I work under a "no-quit clause", and I solve problems.
          I seek to increase my understanding and pursue mastery of web
          development while providing services to local companies.
        </p>
      </div>
    </section>
  );
}

export default About;
