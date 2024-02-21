/**
 * contact-us/page.jsx
 */

import { ContactUsHero } from "@/components/contact-us/contact-us-hero";
// import ContactUsScene from "@/components/contact-us/contact-us-scene";
import React from "react";
import dynamic from "next/dynamic";

// export const metadata = {
//   title: "ALTITUDE CORP | Contact-us",
//   description: "Best company to help you grow",
// };

const ContactUs = () => {
  const ContactUsScene = dynamic(
    () => import("../../components/contact-us/contact-us-scene"),
    {
      ssr: false,
    }
  );

  return (
    <section>
      {/* <div>ContactUs</div>
      <div>Contact Form : Ensure it is simple and ecuourages inquires.</div>
      <div>
        Offer for consultation : Highligth the availabliity of free initial
        consultation{" "}
      </div> */}
      {/* <ContactUsHeroWithAnimation /> */}
      <ContactUsScene />
      <ContactUsHero />
      {/* <ContactUsMain /> */}
    </section>
  );
};

export default ContactUs;
