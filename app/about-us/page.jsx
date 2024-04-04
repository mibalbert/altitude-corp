/**
 * 
 */

import AboutUsHero from "@/components/about-us/about-us-hero";
import ClientsVision from "@/components/about-us/clients-vision";
import ContactUs from "@/components/about-us/contact-us";
import MissionStatement from "@/components/about-us/mission-statement";
import Values from "@/components/about-us/values";
import ContactUsInsidePage from "@/components/contact-us/contact-us-inside-page";
import ContactUsServices from "@/components/services/contact-us-services";
import prisma from "@/lib/prismadb";
import Image from "next/image";
import React from "react";
// <section>
//   <div>AboutUs</div>
//   <div>Our story</div>
//   <div>Our values</div>
//   <div>Vision for clients</div>
// </section>

const AboutUs = async () => {
  // const data = await prisma.servicesPage.findMany({});

  return (
    <>
      <AboutUsHero />
      <MissionStatement />
      <Values />
      <ClientsVision />
      {/* <ContactUsServices data={data[0]} /> */}
      <ContactUs  />
      {/* <ContactUsInsidePage /> */}
    </>
  );
};

export default AboutUs;
