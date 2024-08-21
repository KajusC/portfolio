import React from "react";

export default function AboutComponent({ title, subtitle, children, centered = false }) {
  return (
    <div
      className={`pb-5 ${
        centered ? "flex flex-col items-center text-center" : ""
      }`}
    >
      <p className="text-lg">{title}</p>
      <h2 className="text-2xl font-bold">{subtitle}</h2>
      <div>{children}</div>
    </div>
  );
}
