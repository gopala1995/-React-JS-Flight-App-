import React from "react";
import { ContactUs } from "../../components/contact-us";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProfessionalExp } from "../../components/professional";
import { LowestFare } from "../../components/lowestfare";
import { Services } from "../../components/service";

export const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <ContactUs />
      <Header />
      <Services/>
      {/* <LowestFare/> */}
      <ProfessionalExp/>
      <Footer/>
    </div>
  );
};
