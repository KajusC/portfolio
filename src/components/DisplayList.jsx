import React from 'react'
import { flushSync } from 'react-dom';

export default function DisplayList({ title, elementList, gridBy2 = true }) {

    const gridby = gridBy2 ? "grid-cols-2" : "grid-cols-1";
    return (
      <>
        <h1 className="text-2xl md:text-4xl font-bold grid">{title}</h1>
        <div className="text-sm md:text-lg text-white shadow-md rounded-xl overflow-hidden max-w-lg mx-auto mt-16">
          <ul className={`grid ${gridby}`}>
            {elementList.map((element, index) => (
              <li
                key={element.id}
                className={`flex items-center py-4 px-2 bg-gray-800 rounded-lg shadow-md ${
                  index >= 2 && gridBy2 ? "border-t border-gray-200" : ""
                }`}
              >
                <span className="md:text-lg font-medium mr-2">{element.id}.</span>
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src={element.logo}
                  alt="element logo"
                />
                <div className="flex-1 text">
                  <h3 className="text-[12px] md:text-lg font-bold">
                    {element.name}
                  </h3>
                  <p className="text-[12px] md:text-md">{element.level}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}
