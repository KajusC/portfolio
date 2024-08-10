import React from "react";

export default function About() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold justify-center flex">About</h1>
          <p className="text-lg flex text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold justify-center flex">Skills</h1>
          <ul className="list-disc text-center">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold justify-center flex">Experience</h1>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold justify-center flex">Education</h1>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </>
  );
}
