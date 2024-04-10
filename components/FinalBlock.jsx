/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

const FinalBlock = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center my-6">
      <div className="md:flex md:justify-between md:mx-32 md:items-center md:text-left">
        <div className="flex flex-col font-manrope">
          <span className="text-3xl xl:text-6xl font-light">Make No Compromises</span>
          <span className="text-3xl xl:text-6xl font-bold mt-2 xl:mt-6">Productize Your Ideas</span>
        </div>
        <img src="./growth-3.gif" alt="growth" className="w-[75%] md:w-[60%] xl:w-[50%] my-8 mx-auto xl:mx-0" />
      </div>
      <span className="text-2xl xl:text-4xl text-lime-500 font-extralight font-apercu mt-6 lg:mt-10">
        let us take care of the rest
      </span>
      <span className="text-xl xl:text-3xl text-lime-100 font-extralight font-apercu mt-1.5">
        - Team Aleph, with love
      </span>
      <span className="text-xl xl:text-2xl border-[1.5px] border-dashed p-5 xl:p-10 rounded-2xl text-white font-extralight font-apercu mt-20">
        Reach out:{" "}
        <a
          className="underline hover:text-lime-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sarvagk@gmail.com"
        >
          sarvagk@gmail.com
        </a>
      </span>
    </div>
  );
};

export default FinalBlock;
