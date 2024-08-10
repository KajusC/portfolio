import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="flex w-full h-20 md:shadow-2xl bg-[#ececec]">
      <div className="flex items-center w-full h-full">
        <p className="text-black p-5 font-bold text-xl">Kajus Černiauskas</p>
      </div>
      <div className="flex justify-end items-center w-full h-full p-5">
        <Button asChild>
          <Link to="/about">About</Link>
        </Button>
        <Button asChild>
          <Link to="/projects">Projects</Link>
        </Button>
        <Button asChild>
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
}
