import React from "react";
import coverImage from "../../assets/img/lync_photo_bw.jpg";

const About = () => {
  return (
    <section className="flex-row space-around">
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100px" }}
        alt="cover"
      />
      <h2>About Me</h2>
      <p>
        {" "}
        Seeking to build web applications and grow as a developer. Skills
        include - JavaScript, CSS, JQuery, responsive web design, Node.js,
        Express, mySql. I work under a "no-quit clause", and I solve problems. I
        seek to increase my understanding and pursue mastery of web development
        while providing services to local companies.
      </p>
    </section>
  );
};

export default About;
