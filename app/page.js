import Image from "next/image";
import Ticker from "@/components/Ticker";

import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";
import Clients from "@/components/Clients";
import Academy from "@/components/Academy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex bg-black flex-col lg:justify-between overflow-hidden">
      <div class="z-10 fixed rounded-full animate-blob mix-blend-hard-light filter blur-[100px] opacity-20 -bottom-32 lg:-bottom-48 left-1/2 w-[50%] h-72 bg-lime-400 overflow-hidden" />
      <div class="z-10 fixed rounded-full animate-blob mix-blend-hard-light filter blur-[100px] opacity-20 -bottom-32 lg:-bottom-48 left-0 w-[50%] h-72 bg-teal-400 overflow-hidden" />
      <Navbar />
      <div className="flex flex-col text-center text-6xl mt-6 lg:text-left lg:text-8xl xl:text-9xl lg:mt-24 lg:ml-16 font-bold">
        <div className="grid grid-rows-2 mt-10">
          <span className="z-20">
            Build <span className="font-ptSerif italic text-gray-400">&</span>
          </span>
          <span className="">Accelerate</span>
        </div>
        <div className="lg:-mt-3">
          <span className="text-gray-200 text-2xl font-light xl:font-bold z-40 lg:text-5xl xl:text-6xl">
            your next big <span className="text-lime-600">idea</span>
          </span>
        </div>
        <img src="/sphere.png" alt="locker" className="self-center pt-2 w-[6.4em] lg:hidden" />
        <div className="w-[65%] lg:w-[30%] z-20 self-center flex justify-center items-center p-2 lg:p-6 lg:mt-24 bg-slate-600 bg-opacity-30 border-2 border-lime-800 border-opacity-25 rounded-xl">
          <span className="text-gray-400 z-40 text-center font-light italic text-base xl:text-xl">
            what your business deserves ❤️
          </span>
        </div>
        {/* <div className="w-[45%] grid grid-rows-4 p-6 mt-7 bg-slate-600 bg-opacity-30 border-2 border-slate-800 rounded-xl">
          <span className="text-6xl">Platform</span>
          <span className="text-6xl">Business</span>
          <span className="text-6xl">Idea</span>
          <span className="text-6xl">Project</span>
        </div> */}
        {/* <div className="flex flex-col mt-14">
          <span className="z-20 text-6xl text-gray-400 tracking-tightest italic">Your</span>
          <div className="grid grid-rows-4 font-medium">
            <span className="text-6xl">Platform</span>
            <span className="text-6xl">Business</span>
            <span className="text-6xl">Idea</span>
            <span className="text-6xl">Project</span>
          </div>
        </div> */}
      </div>
      <img
        src="/sphere.png"
        alt="locker"
        className="hidden lg:block lg:absolute lg:m-0 lg:bottom-0 lg:right-8 lg:left-auto lg:top-20 lg:w-[42%]"
      />
      <WhatWeDo />
      <Clients />
      <Academy />
      <Footer />
    </main>
  );
}
