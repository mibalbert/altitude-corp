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
import ServicesSecSection from "@/components/services/services-sec-section";
import ServicesCarousel from "@/components/services/services-carousel";
import prisma from "@/lib/prismadb";
import ContactUsServices from "@/components/services/contact-us-services";
import Waves from "@/components/animations/water";
import ServicesHero from "@/components/services/services-hero";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export const metadata = {
  title: "ALTITUDE CORP | Services",
  description: "Best company to help you grow",
};

const Services = async ({ searchParams }) => {
  // const data = await prisma.servicesPage.findMany({});

  const compObj = await prisma.pageObject.findMany({
    where: {
      page: "services",
    },
  });

  let isEditable = false;

  const session = await getServerSession(authOptions);

  if (session?.user?.role === "ADMIN" && searchParams.editorMode) {
    isEditable = true;
  }
  const heroData = compObj.filter((el) => el.parentComp === "Hero");
  const servicesSecData = compObj.filter(
    (el) => el.parentComp === "ServicesSec"
  );

  const servicesCarData = compObj.filter(
    (el) => el.parentComp === "ServicesCar"
  );
  const servicesContactData = compObj.filter(
    (el) => el.parentComp === "ServicesContactUs"
  );

  return (
    <div className=" pb-12   ">
      <Waves data={heroData} isEditable={isEditable} />
      {/* <ServicesHero /> */}
      <ServicesSecSection data={servicesSecData} isEditable={isEditable} />
      <ServicesCarousel data={servicesCarData} isEditable={isEditable} />
      {/* <Steps /> */}
      <ContactUsServices data={servicesContactData} isEditable={isEditable} />
    </div>
  );
};

export default Services;
