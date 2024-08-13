import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectComponent({ description, image, projectName }) {
    return (
      <div className="flex flex-col items-center w-full max-w-screen-md mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center w-full bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
          <Link to={`/projects/${projectName}`} className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
              <div className="flex flex-col items-start justify-center p-4 md:w-1/2">
                <h1 className="text-xl md:text-2xl text-white font-bold">
                  {description}
                </h1>
              </div>
              <img
                src={image}
                alt="Project"
                className="w-full md:w-1/2 h-auto object-cover rounded-3xl"
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }
  