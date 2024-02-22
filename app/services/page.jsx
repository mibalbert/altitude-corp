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

import Steps from "@/components/services/steps";
import ServicesHero from "@/components/services/services-hero";
import ServicesLetUsHelp from "@/components/services/services-let-us-help";
import prisma from "@/lib/prismadb";
import ContactUsServices from "@/components/services/contact-us-services";
import Waves from "@/components/animations/water";

export const metadata = {
  title: "ALTITUDE CORP | Services",
  description: "Best company to help you grow",
};

const Services = async () => {
  const data = await prisma.servicesPage.findMany({});
  return (
    <div className="bg-white pt-12 xl:pt-16  2xl:pt-20   ">
      <Waves />
      <ServicesHero data={data[0]} />
      <ServicesLetUsHelp data={data[0]} />
      <Steps data={data[0]} />
      <ContactUsServices data={data[0]} />
    </div>
  );
};

export default Services;
