/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
 const [progress, setProgress] = useState(0);

 useEffect(() => {
    // Simulate a loading process that lasts 1.2 seconds
    const loadingDuration = 1200; // 1.2 seconds in milliseconds
    const progressIncrement = 100 / (loadingDuration / 50); // Calculate how much to increment progress per 50ms

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + progressIncrement;
      });
    }, 25); // Update progress every 50ms

    return () => clearInterval(timer);
 }, []);

 useEffect(() => {
    if (progress === 100) {
      gsap.to(".preloader", {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          document.querySelector(".preloader").style.display = "none";
        },
      });
    }
 }, [progress]);

 useEffect(() => {
    // Animate the progress bar width using GSAP
    gsap.to(".progress-bar", {
      duration: 1, // Match the loading duration
      width: `${progress}%`,
      ease: "power2.out", // Easing for smoothness
    });
 }, [progress]);

 // my-[60%] md:mt-[40%] lg:mt-[30%] xl:mt-[25%]
 return (
    <div
      className="w-[100vw] h-[100vh] inset-0 flex items-center justify-center align-middle bg-black z-50"
    >
      <div className="flex flex-col justify-center gap-4 p-4 rounded-lg shadow-lg w-[50%] self-center mx-auto">
        <div className="flex justify-center">
          <img
            src="/alephinnov-logo.png"
            alt="logo"
            className="w-5 mt-12 md:w-8 lg:mt-0 lg:w-[4em] object-cover"
          />
          {/* <img
            src="/alephinnov-logo.png"
            alt="logo"
            className="w-5 mt-12 lg:mt-0 lg:w-[2.1em] object-cover"
          /> */}
        </div>
        <div className="h-2 bg-white rounded-lg">
          <div
            className="h-2 bg-lime-500 rounded-lg progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
 );
};

export default Preloader;
