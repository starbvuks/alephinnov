/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from 'next/router'

const FinalBlock = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center my-6">
      <span className="text-3xl font-light">Make No Compromises</span>
      <span className="text-3xl font-bold mt-2">Productize Your Ideas</span>
      <img src="./growth.gif" alt="growth" className="w-[75%] my-8" />
      <span className="text-2xl text-lime-500 font-extralight font-apercu mt-6">
        let us take care of the rest
      </span>
      <span className="text-xl text-lime-100 font-extralight font-apercu mt-1.5">
        - Team Aleph, with love 
      </span>
      <span className="text-xl border-[1.5px] border-dashed p-5 rounded-2xl text-white font-extralight font-apercu mt-20">
        Reach out To: <a className="underline hover:text-lime-500 transition-colors" target="_blank" rel="noopener noreferrer" href='https://mail.google.com/mail/?view=cm&fs=1&to=sarvagk@gmail.com'>sarvagk@gmail.com</a>
      </span>
    </div>
  );
};

export default FinalBlock;
