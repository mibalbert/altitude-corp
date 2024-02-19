// <div>Services</div>
// <div>Detailed service description</div>
// <div>Our process</div>
// <div className="">
//   <div>Invitation for Custom Solutions:</div>
//   <div>
//     - Encourage visitor to contact me to discuss personalized service
//     options
//   </div>
// </div>
/**
 * services/page.jsx
 */

import ContactUsServices from "@/components/admin/editor-mode/edit-services-page/contact-us-services";
import Steps from "@/components/services/steps";
import ServicesHero from "@/components/services/services-hero";
import ServicesLetUsHelp from "@/components/services/services-let-us-help";
import prisma from "@/lib/prismadb";

const Services = async () => {
  const data = await prisma.servicesPage.findMany({});

  return (
    <>
      <ServicesHero data={data[0]} />
      <ServicesLetUsHelp data={data[0]} />
      <Steps data={data[0]} />
      <ContactUsServices data={data[0]} />
    </>
  );
};

export default Services;
