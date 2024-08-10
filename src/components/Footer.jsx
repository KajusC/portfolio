import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import KTULogo from "../../public/KTU_logo.png";
import openInNewTab from "../assets/scripts/openInNewTab.js";

const repoLink = "https://github.com/KajusC/portfolio";
const linkedInLink =
  "https://www.linkedin.com/in/kajus-%C4%8Derniauskas-a68506205/";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex align-middle">
            <h1 className="text-2xl font-bold items-center flex">
              <p className="text-sm">open source project</p>
              <button
                onClick={() => openInNewTab(repoLink)}
                className="text-white pl-3"
              >
                <FaGithub />
              </button>{" "}
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold"></h1>
            <p className="text-sm flex"><p className="font-bold pr-2 justify-start">Email: </p>             <a href="mailto: testing@example.com">kajuscerniauskasked@gmail.com</a> </p>

            <div className="flex space-x-4 justify-start">
              <p>LinkedIn</p>
              <button
                onClick={() => openInNewTab(linkedInLink)}
                className="text-white"
              >
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
