import React from "react";
import coverImage from "../../assets/img/lync_photo_bw.jpg";

function About() {
  return (
    <section id="about-section" className="my-5 mx-5">
      <h1 id="about">About Me</h1>
      <div className="flex-row space-around">
        <img
          src={coverImage}
          className="mx-5"
          style={{ width: "100px" }}
          alt="cover"
        />
        <div className="mx-5">
          <p id="about-text">
            {/* {" "} */}
            Seeking to build web applications and grow as a developer. Skills
            include - JavaScript, CSS, JQuery, responsive web design, Node.js,
            Express, mySql. I work under a "no-quit clause", and I solve
            problems. I seek to increase my understanding and pursue mastery of
            web development while providing services to local companies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
