import React, { Children, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Modal({ title, children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="text-white ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <IoMenu size={30} />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-[#2d3142] outline-none focus:outline-none rounded-xl">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto col flex-col text-sm md:text-lg text-white shadow-md rounded-xl overflow-hidden max-w-lg mx-auto">
                  <ul className="grid grid-cols-1 space-y-12">
                    {Children.map(children, (child, index) => (
                      <li
                        key={index}
                        className={`flex items-center py-4 px-[25vw] rounded-lg shadow-md
                        }`}
                      >
                        {child}
                      </li>
                    ))}

                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
