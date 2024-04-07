/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Slider = () => {
  return (
    <div className="font-apercu box-border text-center pt-24 -mt-5 rounded-t-[2.2em] bg-gradient-to-b from-[#061e0d] to-black">
      <div className="flex flex-col gap-3">
        <span className="text-5xl xl:text-6xl">Tech Stack</span>
        <span className="text-2xl opacity-25 font-light">(for the geeks)</span>
      </div>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        class="select-none group text-slate-300 w-full my-20 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_16 xl:w-208px,_black_calc(100%-16 xl:w-208px),transparent_100%)]"
      >
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]">
          <li className="flex flex-col gap-2">
            <img src="./stack/react.svg" className="w-16 xl:w-20" />
            <span className="opacity-30 mt-1">react</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/node.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">node</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/mongo.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">mongoDB</span>
          </li>
          <li className="flex flex-col gap-2">
            <img
              src="https://seeklogo.com/images/S/strapi-logo-3551DD3743-seeklogo.com.png"
              className="w-16 xl:w-20"
            />
            <span className="opacity-30">strapi</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/firebase.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">firebase</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/aws.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">aws</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/bootstrap.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">bootstrap</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/tailwind.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">tailwind</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/next.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">next.js</span>
          </li>
          <li className="flex flex-col gap-2">
            <img
              src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
              className="w-16 xl:w-20"
            />
            <span className="opacity-30">graphql</span>
          </li>
        </ul>
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]">
          <li className="flex flex-col gap-2">
            <img src="./stack/react.svg" className="w-16 xl:w-20" />
            <span className="opacity-30 mt-1">react</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/node.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">node</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/mongo.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">mongoDB</span>
          </li>
          <li className="flex flex-col gap-2">
            <img
              src="https://seeklogo.com/images/S/strapi-logo-3551DD3743-seeklogo.com.png"
              className="w-16 xl:w-20"
            />
            <span className="opacity-30">strapi</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/firebase.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">firebase</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/aws.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">aws</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/bootstrap.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">bootstrap</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/tailwind.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">tailwind</span>
          </li>
          <li className="flex flex-col gap-2">
            <img src="./stack/next.svg" className="w-16 xl:w-20" />
            <span className="opacity-30">next.js</span>
          </li>
          <li className="flex flex-col gap-2">
            <img
              src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
              className="w-16 xl:w-20"
            />
            <span className="opacity-30">graphql</span>
          </li>
        </ul>
      </div>
      <div className="w-[100%] mx-auto my-9 mb-40 z-20 text-center flex flex-col justify-center gap-2 xl:gap-4 items-center p-12 h-40 border-dashed border-gray-700 border-y-2 bg-emerald-900 bg-opacity-20 font-apercu text-white">
        <span className="text-base xl:text-xl font-light font-ptSerif text-slate-200 italic opacity-80">in other words, for the non - techies</span>
        {/* <span className="text-lg opacity-25">(for the non-techies)</span>  */}
        <span className="text-xl xl:text-3xl text-transparent bg-clip-text font-semibold bg-gradient-to-b from-lime-500 to-lime-700">
          don&apos;t worry, we know what we&apos;re doing 
        </span>
      </div>
    </div>
  );
};

export default Slider;
