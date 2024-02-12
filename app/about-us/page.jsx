import AboutUsHero from "@/components/about-us/about-us-hero";
import ClientsVision from "@/components/about-us/clients-vision";
import MissionStatement from "@/components/about-us/mission-statement";
import Values from "@/components/about-us/values";
import ContactUsInsidePage from "@/components/contact-us/contact-us-inside-page";
import Image from "next/image";
import React from "react";
// <section>
//   <div>AboutUs</div>
//   <div>Our story</div>
//   <div>Our values</div>
//   <div>Vision for clients</div>
// </section>

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <MissionStatement />
      <Values />
      <ClientsVision />
      <ContactUsInsidePage />
    </>
  );
};

export default AboutUs;
