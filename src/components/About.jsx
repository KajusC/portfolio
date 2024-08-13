import React from "react";
import Skill from "./Skill";
import ModernDescription from "./ModernList";
import Languages from "./Languages";
import AboutComponent from "./AboutComponent";

const currentDateTime = new Date();

export default function About() {
  const [studyYearInString, setStudyYearInString] = React.useState("1st");

  React.useEffect(() => {
    const Date = currentDateTime;
    if (Date.getFullYear() === 2024) {
      if (Date.getMonth() >= 9) {
        setStudyYearInString("3rd");
      } else {
        setStudyYearInString("2nd");
      }
    } else if (Date.getFullYear() === 2025) {
      if (Date.getMonth() >= 9) {
        setStudyYearInString("4th");
      } else {
        setStudyYearInString("3rd");
      }
    }
  }, []);

  const aboutText = `I am a student of Kaunas University of Technology, in the ${studyYearInString}
              year of software systems, seeking to continuously improve my
              knowledge in the constantly growing and in high demand field - IT.
              I aim to improve my skills in software development and improve not
              only as a professional but also as a person. After lectures, I do
              more research on topics which I found interesting. I also
              completed OWASP courses to learn about API security. I also aim to
              learn React.js (you can see now).`;
  return (
    <>
      <div className="md:grid md:grid-flow-col grid-cols-2 text-white p-4 md:justify-items-center space-y-5">
        <div className="flex flex-col items-center space-y-6 md:items-start">
          <Skill />
          <Languages />
        </div>
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-4xl font-bold text-center md:text-left">
            About Me
          </h1>
          <p className="text-sm md:text-lg md:w-2/3 text-center md:text-left">{aboutText}</p>
          <h1 className="text-4xl font-bold text-center md:text-left">
            Education
          </h1>
          <AboutComponent
            title="Software Systems, Bachelor's degree | 2022 - present"
            subtitle="Kaunas University of Technology"
          >
            <ModernDescription
              itemLogo="https://img.icons8.com/?size=100&id=24880&format=png&color=000000"
              itemTitle="SkillED AI Talent Academy"
              itemDescription="Currently a student in SkillED AI, which involves discussions
                              lecutres about AI, meeting with business representers and many
                              more to come."
            />
          </AboutComponent>

          <h1 className="text-4xl font-bold text-center md:text-left">
            Experience
          </h1>
          <AboutComponent
            title="Developer | 2023 09 - present"
            subtitle="No coding tool to assist geneticists „KATH“"
          >
            <ModernDescription
              itemLogo="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
              itemTitle="Developing in python"
              itemDescription="Open source project, which aims to help geneticists to
                              analyze their data. I am responsible for developing
                              the backend of the project."
            />
          </AboutComponent>
          <AboutComponent
            title="Participant | 2024 04 - 2024 05"
            subtitle="Nando Hackathon"
          >
            <ModernDescription
              itemLogo="https://img.icons8.com/?size=100&id=GGHuhIvEes5B&format=png&color=000000"
              itemTitle="Winners of the international hackathon"
              itemDescription="We have introduced a solution to scan plant diseases using a drone and then processing the data using AI."
            />
          </AboutComponent>
        </div>
      </div>
    </>
  );
}
