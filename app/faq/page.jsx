import FAQMain from "@/components/faq/faq-main";
import { BackgroundGradientAnimationDemo } from "@/components/gradient-backround";
import React from "react";

export const metadata = {
  title: "ALTITUDE CORP | FAQ",
  description: "Best company to help you grow",
};

const FAQ = () => {
  return (
    <section className="">
      {/* <div>FAQ</div>
      <div>
        General questions: Adress common inquires about services, how i work,
        and what clients can expect
      </div>
      <div>
        Open invitaion for Queries : Ecourage visitors to contact me for more{" "}
        specific questions{" "}
      </div> */}
      {/* <div className="max-h-[50vh]">
      <BackgroundGradientAnimationDemo />
      </div> */}
      <FAQMain />
    </section>
  );
};

export default FAQ;
