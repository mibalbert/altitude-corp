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

const servicesData = [
  {
    id: 1,
    title: "Financial Planning",
    desc: "Our financial planning service is designed to help you create a comprehensive strategy tailored to your unique financial goals and circumstances. We analyze your current financial situation, develop personalized recommendations, and provide ongoing guidance to help you achieve financial security and success.",
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Investment Management",
    desc: "With our investment management service, we work closely with you to develop an investment portfolio aligned with your objectives, risk tolerance, and time horizon. We continually monitor and adjust your portfolio to capitalize on opportunities and mitigate risks, aiming to maximize returns while managing volatility.",
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Retirement Planning",
    desc: "Planning for retirement is essential to ensure financial independence and security during your golden years. Our retirement planning service helps you define your retirement goals, assess your retirement income needs, and develop a strategy to achieve them. We consider factors such as pensions, Social Security, and investment income to create a sustainable retirement plan.",
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Tax Advisory",
    desc: "Navigating the complexities of tax laws and regulations can be challenging. Our tax advisory service provides expert guidance on tax planning, optimization, and compliance. We help you minimize tax liabilities, identify tax-saving opportunities, and ensure adherence to relevant tax laws, ultimately maximizing your after-tax wealth.",
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Estate Planning",
    desc: "Estate planning is crucial for preserving your wealth and ensuring a smooth transfer of assets to your heirs. Our estate planning service helps you create a comprehensive plan that addresses asset distribution, minimizes estate taxes, and establishes mechanisms for managing your affairs in the event of incapacity. We work closely with legal professionals to implement your estate plan effectively.",
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Risk Management",
    desc: "Effective risk management is essential for safeguarding your financial well-being against unexpected events. Our risk management service assesses potential risks to your financial security, such as market volatility, longevity risk, and unforeseen expenses. We develop strategies to mitigate these risks through diversification, insurance solutions, and contingency planning, providing you with peace of mind.",
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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

  return (
    <div className=" pt-12 xl:pt-16  2xl:pt-20   ">
      <Waves data={heroData} isEditable={isEditable} />
      {/* <ServicesHero /> */}
      <ServicesSecSection data={servicesSecData} isEditable={isEditable} />
      <ServicesCarousel servicesData={servicesData} />
      <Steps />
      <ContactUsServices />
    </div>
  );
};

export default Services;
