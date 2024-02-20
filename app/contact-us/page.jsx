/**
 * contact-us/page.jsx
 */

import { ContactUsHero } from "@/components/contact-us/contact-us-hero";
import ContactUsMain from "@/components/contact-us/contact-us-main";
import React from "react";

export const metadata = {
  title: "ALTITUDE CORP | Contact-us",
  description: "Best company to help you grow",
};

const ContactUs = () => {
  return (
    <section>
      {/* <div>ContactUs</div>
      <div>Contact Form : Ensure it is simple and ecuourages inquires.</div>
      <div>
        Offer for consultation : Highligth the availabliity of free initial
        consultation{" "}
      </div> */}
      <ContactUsHero />
      {/* <ContactUsMain /> */}
    </section>
  );
};

export default ContactUs;
