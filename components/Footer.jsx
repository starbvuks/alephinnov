import React from "react";

const Footer = () => {
  return (
    <div className="w-full rounded-t-xl h-52 py-7 pl-8 pr-9 bg-black text-white grid grid-cols-2 justify-center items-center">
      <div className="flex justify-center flex-col">
        <img
          src="/alephinnov-logo.png"
          alt="logo"
          className="w-20 ml-6 object-cover"
        />
        <span className="font-medium tracking-tighter font-apercu">
          Aleph Innovation
        </span>
      </div>
      <div className="flex flex-col justify-end text-sm items-end text-right">
        <span className="text-base">contact</span>
        <div className="w-[60%] bg-white my-2 rounded-full opacity-20 h-0.5" />
        <span>+91 95335 86416</span>
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