import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function () {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full h-20 md:shadow-2xl bg-gray-900">
      <div className="flex items-center w-full h-full">
        <Link to="/">
        <p className="text-white p-5 font-bold text-xl">Kajus Černiauskas</p>
        </Link>
        <Link to="/Kajus_Cerniauskas_CV.pdf" target="_blank" download>
          <Button asChild>
            <p className="text-white border-2 border-white rounded-3xl hover:bg-white hover:text-black">Download CV</p>
          </Button>
        </Link>
      </div>
      <div className="hidden md:flex justify-end items-center w-full h-full p-5">
        <Button asChild>
          <Link to="/" className="text-white">
            About
          </Link>
        </Button>
        <Button asChild>
          <Link to="/projects" className="text-white">
            Projects
          </Link>
        </Button>
        <Button asChild>
          <Link to="/contacts" className="text-white">
            Contacts
          </Link>
        </Button>
      </div>
      {/* Modal */}
      <div className="flex md:hidden items-center justify-end w-full h-full p-5">
        <Modal title="Links">
          <Button asChild>
            <Link to="/" className="text-white">
              About
            </Link>
          </Button>
          <Button asChild>
            <Link to="/projects" className="text-white">
              Projects
            </Link>
          </Button>
          <Button asChild>
            <Link to="/contacts" className="text-white ">
              Contacts
            </Link>
          </Button>
        </Modal>
      </div>
    </div>
  );
}
