import React from "react";
import Skill from "./Skill";
import ModernList from "./ModernList";

const aboutText = `I am a student of Kaunas University of Technology, in the second
              year of software systems, seeking to continuously improve my
              knowledge in the constantly growing and in high demand field - IT.
              I aim to improve my skills in software development and improve not
              only as a professional but also as a person. After lectures, I do
              more research on topics which I found interesting. I also
              completed OWASP courses to learn about API security. I also aim to
              learn React.js (you can see now).`;

export default function About() {
  return (
    <>
      <div className="md:grid md:grid-flow-col grid-cols-2 text-white p-4 md:justify-items-center space-y-5">
        <div className="flex flex-col items-center space-y-6 md:items-start">
          <Skill />
        </div>
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-4xl font-bold text-center md:text-left">
            About Me
          </h1>
          <p className="w-2/3 text-center md:text-left">{aboutText}</p>
          <h1 className="text-4xl font-bold text-center md:text-left">
            Education
          </h1>
          <div className="">
            <p className="text-lg">
              Software Systems, Bachelor's degree | 2022 - present{" "}
            </p>
            <h2 className="text-2xl font-bold">
              Kaunas University of Technology
            </h2>
            <ModernList
              itemLogo="https://img.icons8.com/?size=100&id=24880&format=png&color=000000"
              itemTitle="SkillED AI Talent Academy"
              itemDescription="Currently a student in SkillED AI, which involves discussions
                              lecutres about AI, meeting with business representers and many
                              more to come."
            />
          </div>
        </div>
      </div>
    </>
  );
}
