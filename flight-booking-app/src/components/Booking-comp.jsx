import React, { useState } from "react";
import { IoIosAirplane } from "react-icons/io";
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { ButtonYellow } from "./ButtonYellow";
import { InputTextComp } from "./InputText";

export const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    departure: "",
    arrivals: "",
    calender: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    // console.log("==>", e.target.value);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };
  
  return (
    <div className="bg-white pb-5 w-[22%] rounded-3xl absolute bottom-12 shadow shadow-gray-300">
      <div className="p-5">
        <p className="font-semibold">
          Book Cheap <span className="text-yellow-400">Flights</span>
        </p>
      </div>
      <div className="flex bg-black text-white justify-center py-3 ">
        <div className="flex">
          <input
            className="text-white"
            type="radio"
            id="age1"
            name="age"
            value="30"
          />
          <p className="text-sm ml-3">One Way</p>
        </div>
        <div className="flex ml-3">
          <input
            className="text-white"
            type="radio"
            id="age1"
            name="age"
            value="30"
          />
          <p className="text-sm ml-3 text-yellow-400">Round Trip</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-5">
          <div className={`flex border border-gray-300 px-3 py-3 `}>
            <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
              <IoIosAirplane />
            </div>
            <input
              type="text"
              className="ml-3 outline-none border-none text-sm w-full"
              placeholder="Enter City"
              label="Departure"
              name="departure"
              value={formData.departure}
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-300">Departure</p>
          </div>

          <div className={`flex border border-gray-300 px-3 py-3 mt-2`}>
            <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
              <CiLocationOn />
            </div>
            <input
              type="text"
              className="ml-3 outline-none border-none text-sm w-full"
              placeholder="Enter Arrivals"
              label="Arrivals"
              name="arrivals"
              value={formData.arrivals}
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-300">Arrivals</p>
          </div>
          <div className={`flex border border-gray-300 px-3 py-3 mt-2 `}>
            <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
              <CiCalendarDate />
            </div>
            <input
              type="date"
              className="ml-3 outline-none border-none text-sm w-full"
              placeholder="Enter Calender"
              label="Calender"
              name="calender"
              value={formData.calender}
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-300">Calender</p>
          </div>
          <div className={`flex border border-gray-300 px-3 py-3 mt-2`}>
            <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
              <IoCallOutline />
            </div>
            <input
              type="text"
              className="ml-3 outline-none border-none text-sm w-full"
              placeholder="Enter Phone"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-300">Phone</p>
          </div>
          <div className={`flex border border-gray-300 px-3 py-3 mt-2`}>
            <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
              <MdOutlineMail />
            </div>
            <input
              type="text"
              className="ml-3 outline-none border-none text-sm w-full"
              placeholder="Enter Email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-300">Email</p>
          </div>
        </div>
        <div className="px-5">
          <div className="py-2 px-5 bg-yellow-400 text-sm mt-3">
            <button
              className="text-white text-center"
              type="submit"
              placeholder="Submit"
            >
              FIND FLIGHTS
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
