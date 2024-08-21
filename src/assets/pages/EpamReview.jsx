import AboutComponent from '@/components/AboutComponent'
import ModernDescription from '@/components/ModernList'
import React from 'react'
import { Link } from 'react-router-dom'

const epamFinalReview = `TI passed with the score: Partly meet expectations

Comment from interviewer:
Kajus showed wide knowledge in different fields. He is good at Entity Framework and Unit testing. He has some small gaps in C#. However, he lack of .NET, especially CLR and JIT. He needs to learn more about HTTP and REST.
Kajus made impression of active person with wiliness to learn new. I believe he won't have a problem to resolve the gaps, appeared during an interview. 

• What are the strongest skills this candidate has? - Entity Framework, .NET Unit and Integration Testing, Software Design, ASP.NET
• What are the weakest skills this candidate has? - .NET, .NET API Development & Integration, Microsoft ASP.NET Web API

Suggestions for the candidate:
- learning .NET, especially such basics as CLR, JIT compilation
- value and reference types
- ReactJS
- learning HTTP and REST
- practice ASP.NET Core
- practice C# resolving katas (for instance, in leetcode.com)`;

export default function EpamReview() {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white pb-10">
      <h1 className="md:text-5xl text-2xl font-bold py-10 text-center">
        EPAM .NET Fundamentals Program
      </h1>
      <div className="flex flex-col items-center justify-center text-white text-xl w-3/4 md:w-2/3">
        <AboutComponent
          title="Student 2024 02 - 2024 07"
          subtitle="EPAM .NET Fundamentals Program"
          last={true}
        >
          <div className="border-t-2 border-b-2 pb-6">
            <ModernDescription
              itemLogo="https://img.icons8.com/?size=100&id=KZHjwwenS7oK&format=png&color=000000"
              itemTitle="Data Processing"
              itemDescription="I have learned how to process data using C# and the .NET framework. I also had to use SQL syntax to interact with the database."
            />
            <ModernDescription
              itemLogo="https://img.icons8.com/?size=100&id=18706&format=png&color=000000"
              itemTitle="Design Patterns & Application Architecture"
              itemDescription="We have been taught about SOLID principles, design patterns from the Gang of Four book, and how to apply them in our projects."
            />
            <ModernDescription
              itemLogo="https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000"
              itemTitle="C# Advanced"
              itemDescription="We have learned about asynchronous programming, Entity Framework, and how to use them in our projects."
            />
            <ModernDescription
              itemLogo="https://img.icons8.com/?size=100&id=dhCOURGWQnTW&format=png&color=000000"
              itemTitle="ASP.NET"
              itemDescription="EPAM has provided us with knowledge about ASP.NET, how it works, and how to create web applications via MVC and REST API."
            />
          </div>
        </AboutComponent>
        <div className="mt-10">
          <h1 className='font-bold text-3xl mb-4'>
            Final Assessment/Interview with EPAM Result
          </h1>
          <pre className='whitespace-pre-wrap'>
            {epamFinalReview}
          </pre>
        </div>
      </div>
    </div>
  );
}
