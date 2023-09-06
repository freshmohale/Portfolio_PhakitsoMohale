import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, my name is Phakitso Mohale. I am a
            Frontend Developer. I build web apllications with React, Angular, Bootstrap and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Tailwind CSS, SaSS, Css3, HTML and Javascript.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose, Postrgresql and Pg.</p>

          <p>
            In my spare time I volunteer at a local high school where I teach learners basic computer skills and Lego Robotics.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
