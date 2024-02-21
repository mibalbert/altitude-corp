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
import ServicesNewHero from "@/components/services/services-new-hero";
import ServicesHeroWithWaves from "@/components/services/services-hero-with-waves";
import MyWebGLComponent from "@/components/animations/water";

export const metadata = {
  title: "ALTITUDE CORP | Services",
  description: "Best company to help you grow",
};

const Services = async () => {
  const data = await prisma.servicesPage.findMany({});
  // const op = await prisma.post.findMany();
  // console.log(op);
  return (
    <>
      <MyWebGLComponent />
      {/* <ServicesHeroWithWaves data={data[0]} /> */}
      <ServicesHero data={data[0]} />
      <ServicesLetUsHelp data={data[0]} />
      <Steps data={data[0]} />
      <ContactUsServices data={data[0]} />
    </>
  );
};

export default Services;
