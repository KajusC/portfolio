import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function () {

  const onDownloadPdf = () => {
        fetch("Kajus_Cerniauskas_CV.pdf").then((response) => {
          response.blob().then((blob) => {
          
              const fileURL =
                  window.URL.createObjectURL(blob);
                  
              let alink = document.createElement("a");
              alink.href = fileURL;
              alink.download = "Kajus_Cerniauskas_CV.pdf";
              alink.click();
          });
      });
  };

  return (
    <div className="flex w-full h-20 md:shadow-2xl bg-gray-900">
      <div className="flex items-center w-full h-full">
        <Link to="/portfolio">
        <p className="text-white p-5 font-bold text-xl">Kajus Černiauskas</p>
        </Link>

          <button onClick={onDownloadPdf} className="w-[7rem] md:w-[10rem]">
            <p className="text-white text-[10px] md:text-lg border-2 border-white rounded-2xl hover:bg-white hover:text-black p-2">Download CV</p>
          </button>

      </div>
      <div className="hidden md:flex justify-end items-center w-full h-full p-5">
        <Button asChild>
          <Link to="/portfolio" className="text-white">
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
      <div className="flex md:hidden items-center justify-end w-full h-full p-5">
        <Modal title="Links">
          <Button asChild>
            <Link to="/portfolio" className="text-white">
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
