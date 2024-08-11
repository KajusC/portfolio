import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="flex w-full h-20 md:shadow-2xl bg-gray-900">
      <div className="flex items-center w-full h-full">
        <p className="text-white p-5 font-bold text-xl">Kajus Černiauskas</p>
      </div>
      <div className="flex justify-end items-center w-full h-full p-5">
        <Button asChild >
          <Link to="/about" className="text-white">About</Link>
        </Button>
        <Button asChild>
          <Link to="/projects" className="text-white">Projects</Link>
        </Button>
        <Button asChild>
          <Link to="/contact" className="text-white">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
