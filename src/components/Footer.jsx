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
    <footer className="bg-gray-900 text-white p-4">
      <div className="smx-auto">
        <div className="flex justify-between">
          <div className="flex align-middle">
            <h1 className="text-xl md:text-2xl font-bold items-center md:flex">
              <p className="text-[12px] md:text-md">Source:</p>
              <button
                onClick={() => openInNewTab(repoLink)}
                className="text-white md:pl-4"
              >
                <FaGithub />
              </button>
            </h1>
          </div>
          <div>
            <p className="text-sm md:flex">
              <span className="font-bold pr-2">Email:</span>
              <a href="mailto:testing@example.com">
                <p className="text-">kajuscerniauskasked@gmail.com</p>

              </a>
            </p>
            <div className="flex space-x-4">
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
