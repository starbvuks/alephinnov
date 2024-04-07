import React from "react";

const Footer = () => {
  return (
    <div className="w-full z-20 h-40 xl:h-32 mt-16 py-7 xl:py-4 pl-12 pr-9 bg-black text-white grid grid-cols-2 xl:grid-cols-3 justify-center lg:justify-center items-center">
      <div className="flex justify-center flex-col">
        <img
          src="/alephinnov-logo.png"
          alt="logo"
          className="w-20 mt-1 ml-6 object-cover"
        />
        <span className="font-medium tracking-tighter font-apercu mt-1.5">
          Aleph Innovation
        </span>
      </div>
      <div className="hidden lg:block lg:text-center lg:text-3xl">
     <span>🚧 🚧 🚧</span><br />
     <span className="text-sm font-light">site still under construction</span>
      </div>
      <div className="flex flex-col justify-end text-xs ml-6 text-left xl:text-right font-apercu">
        <span className="text-sm font-light tracking-[0.16em] mb-4">CONTACT</span>
        {/* <div className="w-[60%] bg-white my-2 rounded-full opacity-20 h-0.5" /> */}
        <span className="mb-1">+91 95335 86416</span>
        <span>sarvag@startupgrind.com</span>
        {/* <hr className="mt-3 opacity-50"></hr> */}
        {/* <div>
          <span>find us on</span>
          <img src="/LinkedIn.png" alt="linkedin" className="w-8" />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
