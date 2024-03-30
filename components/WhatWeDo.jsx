import React from "react";

const WhatWeDo = () => {
  return (
    <div className="text-2xl mt-16 py-16 rounded-t-[2.5em] bg-[#0F110E] text-center font-apercu flex flex-col items-center justify-center">
      <span className="z-20 text-5xl tracking-tight">What We Do</span>
      <span className="z-20 px-5 mt-4 text-xl font-light">
        design and develop platforms for your business that 
        <span className="font-sans text-lime-500 font-bold italic">
          {" "}
          demands attention
        </span>
      </span>
      <div className="mt-9 min-h-[40%] w-[70%] rounded-2xl p-8 flex flex-col justify-center items-center bg-lime-600 bg-opacity-15 border-2 border-lime-800 border-opacity-25">
        <span className="z-20 tracking-tight">UI/UX Designing</span>
        <img
        src="/ui-ux.png"
        alt="ui"
        className=""
      />
      </div>
      <div className="mt-6 min-h-[50%] w-[70%] rounded-2xl p-8 flex flex-col justify-center items-center bg-lime-600 bg-opacity-15 border-2 border-lime-800 border-opacity-25">
        <span className="z-20 tracking-tight">Web Development</span>
        <img
        src="/web-dev.png"
        alt="webdev"
        className="my-8"
      />
      </div>
      <div className="mt-6 min-h-[50%] w-[70%] rounded-2xl p-8 flex flex-col justify-center items-center bg-lime-600 bg-opacity-15 border-2 border-lime-800 border-opacity-25">
        <span className="z-20 tracking-tight">Mobile App Development</span>
        <img
        src="/mobile-dev.png"
        alt="webdev"
        className="my-4"
      />
      </div>
      <div className="mt-6 min-h-[50%] w-[70%] rounded-2xl p-6 flex flex-col justify-center items-center bg-lime-600 bg-opacity-15 border-2 border-lime-800 border-opacity-25">
        <span className="z-20 tracking-tight">Database Architecturing & Cloud Deployment</span>
        <img
        src="/db.png"
        alt="webdev"
        className="my-4"
      />
      </div>
    </div>
  );
};

export default WhatWeDo;
