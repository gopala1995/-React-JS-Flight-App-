import React from "react";
import flightImage from "../assets/flightImages.jpeg";
import { NavBar } from "./navbar";

export const Header = () => {
  return (
    <div
      className="w-full h-[80%]"
      style={{ backgroundImage: `url("${flightImage}")` }}
    >
      <NavBar />
    </div>
  );
};
