import React from "react";
import flightImage from "../assets/flightImages.jpeg";
import { NavBar } from "./navbar";
import { ButtonYellow } from "./ButtonYellow";
import { FlightBookingForm } from "./Booking-comp";

export const Header = () => {
  return (
    <div
      className="w-full h-[80%]"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/486836087/photo/business-travel.jpg?b=1&s=612x612&w=0&k=20&c=CZW45wiw7o4P8T1QZzy4A2cnVSmn48oYlcr50D0ONpg=")`,
      }}
    >
      <NavBar />
      <div className="h-[80%] grid grid-cols-2">
        <div className="p-5 flex items-center">
          <div>
            <p className="text-white text-xl">FLYING BUDGET</p>
            <p className="text-white text-5xl">We Are Very Reliable </p>
            <p className="text-yellow-400 text-5xl">
              Professional, Experienced
            </p>
            <p className="text-white text-sm mt-3">
              <span className="text-yellow-400">Flying budget</span> is the
              versatile website expowering you
            </p>
            <p className="text-white text-sm">
              full services airline offering{" "}
              <span className="text-yellow-400">reduce fairs.</span>
            </p>
            <ButtonYellow label={"FIND FLIGHT"} extraStyle={"flex mt-5"} />
          </div>
        </div>
        <div className="flex">
          <FlightBookingForm />
        </div>
      </div>
    </div>
  );
};
