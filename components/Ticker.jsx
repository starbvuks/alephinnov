"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Ticker = () => {
 const tickerRef = useRef(null);

 useEffect(() => {
    const tickerItems = tickerRef.current.children;
    const tickerLength = tickerItems.length;
    let currentItem = 0;

    const tickerAnimation = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      onRepeat: () => {
        currentItem = (currentItem + 1);
        gsap.to(tickerItems[currentItem], {
          duration: 1,
          y: "-100%",
          opacity: 0,
          onComplete: () => {
            gsap.set(tickerItems[currentItem], { y: "100%", opacity: 1 });
          },
        });
      },
    });

    tickerAnimation.to(tickerItems[0], { duration: 1, y: "-100%", opacity: 0 });
 }, []);

 return (
    <div className="flex flex-col items-center space-y-4">
      <span className="text-xl">Your </span>
      <div ref={tickerRef} className="flex flex-col items-center space-y-4">
        <div className="word">Business</div>
        <div className="word">Platform</div>
        <div className="word">Idea</div>
        <div className="word">Project</div>
      </div>
    </div>
 );
};

export default Ticker;
