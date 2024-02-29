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

export const metadata = {
  title: "ALTITUDE CORP | Services",
  description: "Best company to help you grow",
};

const servicesData = [
  {
    id: 1,
    title: "Financial Planning",
    desc: "Our financial planning service is designed to help you create a comprehensive strategy tailored to your unique financial goals and circumstances. We analyze your current financial situation, develop personalized recommendations, and provide ongoing guidance to help you achieve financial security and success.",
  },
  {
    id: 2,
    title: "Investment Management",
    desc: "With our investment management service, we work closely with you to develop an investment portfolio aligned with your objectives, risk tolerance, and time horizon. We continually monitor and adjust your portfolio to capitalize on opportunities and mitigate risks, aiming to maximize returns while managing volatility.",
  },
  {
    id: 3,
    title: "Retirement Planning",
    desc: "Planning for retirement is essential to ensure financial independence and security during your golden years. Our retirement planning service helps you define your retirement goals, assess your retirement income needs, and develop a strategy to achieve them. We consider factors such as pensions, Social Security, and investment income to create a sustainable retirement plan.",
  },
  {
    id: 4,
    title: "Tax Advisory",
    desc: "Navigating the complexities of tax laws and regulations can be challenging. Our tax advisory service provides expert guidance on tax planning, optimization, and compliance. We help you minimize tax liabilities, identify tax-saving opportunities, and ensure adherence to relevant tax laws, ultimately maximizing your after-tax wealth.",
  },
  {
    id: 5,
    title: "Estate Planning",
    desc: "Estate planning is crucial for preserving your wealth and ensuring a smooth transfer of assets to your heirs. Our estate planning service helps you create a comprehensive plan that addresses asset distribution, minimizes estate taxes, and establishes mechanisms for managing your affairs in the event of incapacity. We work closely with legal professionals to implement your estate plan effectively.",
  },
  {
    id: 6,
    title: "Risk Management",
    desc: "Effective risk management is essential for safeguarding your financial well-being against unexpected events. Our risk management service assesses potential risks to your financial security, such as market volatility, longevity risk, and unforeseen expenses. We develop strategies to mitigate these risks through diversification, insurance solutions, and contingency planning, providing you with peace of mind.",
  },
];

const Services = async () => {
  const data = await prisma.servicesPage.findMany({});
  return (
    <div className="bg-white pt-12 xl:pt-16  2xl:pt-20   ">
      <Waves />
      <ServicesSecSection data={data[0]} />
      <ServicesCarousel servicesData={servicesData} data={data[0]} />
      <Steps data={data[0]} />
      <ContactUsServices data={data[0]} />
    </div>
  );
};

export default Services;
