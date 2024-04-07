/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="text-xl mt-16 xl:mt-28 pt-16 pb-32 rounded-t-[2.2em] bg-[#0F110E] text-center font-apercu flex flex-col items-center justify-center">
      {/* <div className="hidden lg:block"> */}
      <span className="z-20 text-5xl xl:text-6xl tracking-tight">
        What We Do
      </span>
      <br />
      <span className="z-20 px-5 mt-4 xl:mt-0 text-xl xl:text-3xl font-light">
        design and develop platforms for your business that
        <span className="xl:hidden font-sans text-lime-500 font-bold italic">
          {" "}
          demands attention
        </span>
      </span>
      <span className="hidden text-3xl mt-2 xl:block font-sans text-lime-500 font-bold italic">
        {" "}
        demands attention
      </span>
      {/* </div> */}
      <div className="px-14 xl:my-12 xl:w-full xl:px-32 xl:grid xl:grid-cols-4 xl:justify-center xl:gap-12">
        <div className="mt-12 min-h-[50%] rounded-2xl p-8 flex flex-col justify-between items-center bg-lime-600 bg-opacity-15 border-2 border-lime-800 border-opacity-25">
          <span className="z-20 tracking-tight">UI/UX Designing</span>
          <img src="/ui-ux.png" alt="ui" className="w-[65%] xl:w-[80%]" />
        </div>
        <div className="mt-6 min-h-[50%] rounded-2xl pt-8 pb-8 xl:pb-9 flex flex-col justify-between items-center bg-lime-600 bg-opacity-15 border-2 border-lime-800 border-opacity-25">
          <span className="z-20 tracking-tight">Web Development</span>
          <img src="/web-dev.png" alt="webdev" className="w-[80%] xl:w-[100%]" />
        </div>
        <div className="mt-6 min-h-[50%] rounded-2xl p-8 flex flex-col justify-between items-center bg-lime-600 bg-opacity-15 border-2 border-lime-800 border-opacity-25">
          <span className="z-20 tracking-tight xl:text-xl">
            Mobile App Development
          </span>
          <img src="/mobile-dev.png" alt="webdev" className="w-[80%] xl:w-[100%]" />
        </div>
        <div className="mt-6 min-h-[50%] rounded-2xl p-6 flex flex-col justify-between items-center bg-lime-600 bg-opacity-15 border-2 border-lime-800 border-opacity-25">
          <span className="z-20 tracking-tight xl:text-xl">
            Database Architecturing & Cloud Deployment
          </span>
          <img src="/db.png" alt="webdev" className="w-[80%] xl:w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
