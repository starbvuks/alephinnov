"use client";
import React, { useState } from "react";
import Link from "next/link";

const EduNavbar = () => {
  const [toggleState, setToggleState] = useState("2d");

  return (
    <nav className="bg-black w-full flex items-center font-apercu justify-center lg:justify-between h-24 px-12 text-white">
      <div >
        <Link href="/" className="font-bold text-3xl flex justify-center items-center">
          <img
            src="/alephinnov-logo.png"
            alt="logo"
            className="w-24 mt-12 lg:mt-0 lg:w-[2.1em] object-cover"
          />
          <span className="hidden lg:block lg:text-[1.3em] font-medium tracking-tighter">
            aleph <span className="text-lime-500 text-3xl">academy</span>
          </span>
        </Link>
      </div>
      <div className="hidden lg:flex mr-6 mt-[5%] text-xl font-normal gap-12">
        <div className="group grid grid-rows-2">
          <button className="mr-2">about</button>
          <span className="bg-lime-500 bg-opacity-10 text-lime-400 text-sm p-3 text-center rounded-xl opacity-0 transition-all ease-out delay-200 group-hover:opacity-100">
            under <br /> development
          </span>
        </div>
        <div className="group grid grid-rows-2">
          <button className="mr-2">contact</button>
          <span className="bg-lime-500 bg-opacity-10 text-lime-400 text-sm p-3 text-center rounded-xl opacity-0 transition-all ease-out delay-200 group-hover:opacity-100">
            under <br /> development
          </span>
        </div>
        <div className="mt-[4.5%]">
          <Link href="/edu">
            <span className="border-lime-500 border-2 text-lime-500 rounded-lg p-3 hover:bg-lime-950">
              academy
            </span>
          </Link>
        </div>
      </div>
      {/* <div className="mr-4">
        <button
          className={`w-8 h-8 rounded-full ${
            toggleState === "2d" ? "bg-green-500" : "bg-blue-500"
          }`}
          onClick={handleToggle}
        />
      </div> */}
    </nav>
  );
};

export default EduNavbar;
