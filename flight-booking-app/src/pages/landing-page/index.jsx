import React from "react";
import { ContactUs } from "../../components/contact-us";
import { Header } from "../../components/header";

export const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <ContactUs />
      <Header />
    </div>
  );
};
