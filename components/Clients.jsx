/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Clients = () => {
  return (
    <div className="text-2xl -mt-7 pt-20 pb-32 rounded-t-[2.2em] bg-gradient-to-b from-lime-700 text-center font-bold font-apercu flex flex-col items-center justify-center gap-3">
      <span className="z-20 text-5xl xl:text-6xl tracking-tight">
        Our Clientele
      </span>
      <div className="grid grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2 lg:gap-4 px-10 lg:px-6 mt-10 lg:mt-20 lg:w-[50%] lg:justify-center lg:items-center">
        <a target="_blank" href="https://godigitalnow.co/" rel="noopener noreferrer">
          <img
            src="/gdn-logo.png"
            alt="gdn"
            className="lg:w-[60%] w-[90%] lg:mx-auto object-contain p-2 bg-white rounded-xl hover:scale-110 hover:opacity-100 opacity-90 lg:opacity-40 transition delay-75"
          />
        </a>
        <a target="_blank" href="https://portfolio.soad.co.in/specialization" rel="noopener noreferrer">
          <img
            src="/wox.png"
            alt="wox"
            className="lg:w-[70%] lg:mx-auto object-contain p-2 rounded-xl hover:scale-110 hover:opacity-100 opacity-90 lg:opacity-40 transition delay-75"
          />
        </a>
        <Link href="https://myprojoy.com/">
          <img
            src="/projoy.png"
            alt="projoy"
            className="w-[80%] lg:mx-auto lg:w-[60%] ml-2 -mt-2 object-contain p-1 rounded-xl hover:scale-110 hover:opacity-100 opacity-90 lg:opacity-40 transition delay-75"
          />
        </Link>
        <Link href="https://www.linkedin.com/company/90545013">
          <img
            src="/tm.png"
            alt="tm"
            className="w-[70%] lg:mx-auto lg:w-[60%] mt-4 lg:-mt-2 object-contain p-2 rounded-xl hover:scale-110 hover:opacity-100 opacity-90 lg:opacity-40 transition delay-75"
          />
        </Link>
      </div>
    </div>
  );
};

export default Clients;
