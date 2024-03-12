/**
 * admin/(website-pages)/edit/faq/page.jsx
 */

{
  /* <div>FAQ</div>
<div>
  General questions: Adress common inquires about services, how i work,
  and what clients can expect
</div>
<div>
  Open invitaion for Queries : Ecourage visitors to contact me for more{" "}
  specific questions{" "}
</div> */
}
{
  /* <div className="max-h-[50vh]">
<BackgroundGradientAnimationDemo />
</div> */
}
import FAQMain from "@/components/admin/editor-mode/edit-faq-page/faq-main";
import prisma from "@/lib/prismadb";
import React from "react";

const EditFaq = async () => {
  const data = await prisma.faqPage.findMany({});

  return (
    <section className="pb-52">
      <FAQMain data={data[0]} />
    </section>
  );
};

export default EditFaq;
