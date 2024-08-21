import React from "react";


export default function ModernDescription({ itemLogo, itemTitle, itemDescription,size, centered = false }) {
  return (
    <div className={` ${centered ? 'flex flex-col place-items-center' : 'grid'} md:grid-cols-2 gap-10 mt-10`}>
      <div className="flex gap-4 items-start">
        <span className={`bg-violet-500/10 p-3 rounded-full ${size}`}>
          <img src={itemLogo} className=" rounded-xl" />
        </span>
        <div>
          <h3 className="font-semibold text-xl pb-3">{itemTitle}</h3>
          <p className="mt-1 text-gray-300"> {itemDescription}</p>
        </div>
      </div>
    </div>
  );
}
