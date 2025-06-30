import Image from "next/image";
import EduNavbar from "@/components/EduNavbar";
export default function EduLanding() {
  return (
    <main className=" bg-black text-white">
      {/* <div class="z-10 fixed rounded-full animate-blob mix-blend-hard-light filter blur-[100px] opacity-20 -bottom-32 left-1/2 w-[55%] h-72 bg-fuchsia-500 overflow-hidden" /> */}
      {/* <div class="z-10 fixed rounded-full animate-blob mix-blend-hard-light filter blur-[100px] opacity-20 -bottom-32 left-0 w-[55%] h-72 bg-indigo-500 overflow-hidden" /> */}
      <EduNavbar />
      <div className="flex flex-col justify-center items-center">
        <span className="text-7xl font-apercu font-bold mt-20">
          learn <span className="text-lime-400 text-8xl">WHY</span>{" "}
          <span className="text-7xl">not how</span>
        </span>
        <img src="/edu/learning.png" alt="locker" className="w-[35%]" />
        <span className="text-3xl font-apercu font-light">
          course details announcment soon
        </span>
      </div>
    </main>
  );
}
