import Image from "next/image";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main className="flex bg-black flex-col first-letter:justify-between overflow-hidden">
      <div class="z-10 absolute rounded-full animate-blob mix-blend-hard-light filter blur-[120px] opacity-20 -bottom-48 left-1/2 w-[50%] h-96 bg-lime-400" />
      <div class="z-10 absolute rounded-full animate-blob mix-blend-hard-light filter blur-[120px] opacity-20 -bottom-56 left-0 w-[50%] h-72 bg-teal-400" />
      <Navbar />
      <div className="flex flex-col text-9xl mt-24 ml-16 font-bold">
        <div className="grid grid-rows-2 mt-10">
          <span className="z-20">
            Build <span className="font-ptSerif italic text-gray-400">&</span>
          </span>
          <span className="">Accelerate</span>
        </div>
        <div>
          <span className="text-gray-200 text-6xl mt-10">
            your next big <span className="text-lime-600">idea</span>
          </span>
        </div>
        <div className="w-[30%] z-20 self-center flex justify-center items-center p-6 mt-24 bg-slate-600 bg-opacity-30 border-2 border-lime-800 border-opacity-25 rounded-xl">
          <span className="text-gray-400 font-light italic text-2xl">
            more info coming soon ❤️
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
        className="absolute right-8 mt-24 w-[42%]"
      />
    </main>
  );
}
