import React from "react";
import DisplayList from "./DisplayList";

const cssLogo = "https://img.icons8.com/color/48/000000/css3.png";
const htmlLogo = "https://img.icons8.com/color/48/000000/html-5.png";
const jsLogo = "https://img.icons8.com/color/48/000000/javascript.png";
const reactLogo = "https://img.icons8.com/color/48/000000/react-native.png";
const csharpLogo = "https://img.icons8.com/color/48/000000/c-sharp-logo.png";
const dotnetLogo =
  "https://img.icons8.com/?size=100&id=yHPufAHQf4B9&format=png&color=000000";
const javaLogo =
  "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png";
const pythonLogo = "https://img.icons8.com/color/48/000000/python.png";
const sqlLogo = "https://img.icons8.com/color/48/000000/sql.png";
const scripting = "https://img.icons8.com/?size=100&id=hvZ4mmbc3mTK&format=png&color=000000";

const skillList = [
  {
    id: 1,
    name: "C#",
    logo: csharpLogo,
    level: "Advanced",
  },
  {
    id: 2,
    name: ".NET",
    logo: dotnetLogo,
    level: "Advanced",
  },
  {
    id: 3,
    name: "Java",
    logo: javaLogo,
    level: "Intermediate",
  },
  {
    id: 4,
    name: "Python",
    logo: pythonLogo,
    level: "Intermediate",
  },
  {
    id: 5,
    name: "SQL",
    logo: sqlLogo,
    level: "basics",
  },
  {
    id: 6,
    name: "HTML",
    logo: htmlLogo,
    level: "basics",
  },
  {
    id: 7,
    name: "CSS",
    logo: cssLogo,
    level: "basics",
  },
  {
    id: 8,
    name: "JavaScript",
    logo: jsLogo,
    level: "basics",
  },
  {
    id: 9,
    name: "React",
    logo: reactLogo,
    level: "basics",
  },
  {
    id: 10,
    name: "Shell Scripting",
    logo: scripting,
    level: "basics",
  },
];

export default function Skill() {
    return (
      <DisplayList title="Skills" elementList={skillList} gridBy2={true} />
    );
}
