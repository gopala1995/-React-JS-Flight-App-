import React from "react";

export const NavBar = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="justify-center col-span-1 p-5">
        <img
          src="https://pacewisdom.com/assets/imgs/Home/logo-h-svg%20.svg"
          alt=""
          width="300px"
        />
      </div>
      <div className="col-span-3 p-5 flex">
        <a href="index.html">
          <div className="hover:border-b-[2px] border-b-yellow-400 pb-2">
            <p className="text-white">HOME</p>
          </div>
        </a>
        <a href="index.html">
          <div className="hover:border-b-[2px] border-b-yellow-400 pb-2">
            <p className="text-white">ABOUT US</p>
          </div>
        </a>
        <a href="index.html">
          <div className="hover:border-b-[2px] border-b-yellow-400 pb-2">
            <p className="text-white">FLIGHT</p>
          </div>
        </a>
        <a href="index.html">
          <div className="hover:border-b-[2px] border-b-yellow-400 pb-2">
            <p className="text-white">GET IN TOUCH</p>
          </div>
        </a>
      </div>
    </div>
  );
};
