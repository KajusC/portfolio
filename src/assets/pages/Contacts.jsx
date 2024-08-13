import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Contacts() {
  return (
    <div className="flex flex-col items-center space-y-5 justify-center h-[100vh]">
      <h1 className="text-5xl text-white font-bold pb-10">Contacts</h1>
      <p className="text-xl text-white text-center">
        Contact me at:{" "}
        <a
          href="mailto: kajuscerniauskasked@gmail.com"
          className="text-blue-500 underline"
        >
          kajuscerniauskasked@gmail.com
        </a>
      </p>
      <p className='text-white'> or find me here</p>
      <div className='flex space-x-10'>
        
        <Link to="https://github.com/KajusC">
          <FaGithub className="text-white text-5xl" />
        </Link>
        <Link to="https://www.linkedin.com/in/kajus-%C4%8Derniauskas-a68506205/">
          <FaLinkedin className="text-white text-5xl" />
        </Link>
      </div>
    </div>
  );
}
