import React from "react";

export default function AboutComponent({ title, subtitle, children }) {
  return (
    <>
      <div>
        <p className="text-lg">{title}</p>
        <h2 className="text-2xl font-bold">{subtitle}</h2>
        {children}
      </div>
    </>
  );
}
