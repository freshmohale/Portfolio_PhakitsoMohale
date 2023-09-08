import React from "react";
import AboutImg from "../assets/profile2.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-black pb-2">
            About Me
          </h2>

          <p className="pb-5">
            My name is Phakitso Mohale. I am a Marketing Graduate with a passion for Web Development. 
            For the past four years, I've been working in marketing, where I had the privilege of assisting the Campaigns Manager in a corporate setting.
          </p>
          <p className="pb-5">
          However, my journey took an interesting turn when I got involved with a Microsoft program. 
          Through this program, I discovered my fascination with IT, especially web development, including HTML, CSS, and Javascript.
          </p>

          <p className="pb-5">
            During this time, I had the chance to work with a local high school. 
            We started a coding club where I introduced students to computer basics, Scratch Programming, and Lego Robotics. 
            It was a fantastic experience, and it helped students excel in their STEM subjects.
            </p>

          <p className="pb-5">
          This newfound passion for technology led me to the Digital Academy. 
            Here, I'm expanding my knowledge and skills in web development, and it's been an incredible journey. 
            Learning about new technologies and how they work has been both challenging and exciting.  
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
