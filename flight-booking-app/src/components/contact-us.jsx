import React from "react";
import { FiPhoneCall, FiFacebook } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";

export const ContactUs = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex justify-center h-14">
        <div className="flex items-center">
          <FiPhoneCall />
          <p className="text-sm ml-2">+91 9898983838</p>
          <MdOutlineEmail className="ml-5" />
          <p className="text-sm ml-2">info@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center h-14">
        <div className="flex items-center ">
          <a href="#">
            <FiFacebook size={20} />
          </a>

          <a href="#">
            <FaXTwitter size={20} className="ml-2" />
          </a>

          <a href="#">
            <FaGooglePlusG size={20} className="ml-2" />
          </a>

          <a href="#">
            <BsInstagram size={20} className="ml-2" />
          </a>

          <a href="#">
            <SlSocialLinkedin size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};
