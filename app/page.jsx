/**
 * @app/page.tsx
 */

import dynamic from "next/dynamic";

import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

import ContactUsHome from "@/components/landing-page/contact-us-home";
import Elevator from "@/components/landing-page/elevator";
import Hero from "@/components/landing-page/hero";
import Numbers from "@/components/landing-page/numbers";
import PeaceOfMind from "@/components/landing-page/peace-of-mind";
import { InfiniteMovingReviewCards } from "@/components/landing-page/rev";

const WorldWide = dynamic(
  () => import("../components/landing-page/world-wide"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "ALTITUDE CORP | Home",
  description: "Best company to help you grow",
};


export default async function Home({ searchParams }) {


  let isEditable = false;

  const session = await getServerSession(authOptions);

  if (session?.user?.role === "ADMIN" && searchParams.editorMode) {
    isEditable = true;
  }

  const compObj = await prisma.pageObject.findMany({
    where: {
      page: "home",
    },
  });
  const reviews = await prisma.reviews.findMany();

  const heroComp = compObj.filter((el) => el.parentComp === "Hero");
  const elevatorComp = compObj.filter((el) => el.parentComp === "Elevator");
  const peaceOfMindComp = compObj.filter(
    (el) => el.parentComp === "PeaceOfMind"
  );
  const numbersComp = compObj.filter((el) => el.parentComp === "Numbers");
  // const stepsComp = compObj.filter((el) => el.parentComp === "Steps");
  const plansComp = compObj.filter((el) => el.parentComp === "Plans");
  const landingFooterComp = compObj.filter(
    (el) => el.parentComp === "LandingFooter"
  );

  const homeContactData = compObj.filter(
    (el) => el.parentComp === "ContactUsHome"
  );

  return (
    <section className="bg-white ">
      <Hero data={heroComp} isEditable={isEditable} />
      <InfiniteMovingReviewCards data={reviews} />
      <Elevator data={elevatorComp} />
      <PeaceOfMind data={peaceOfMindComp} />
      <Numbers data={numbersComp} />
      {/* <TheSteps data={stepsComp} /> */}
      {/* <Plans data={plansComp} /> */}
      <WorldWide data={landingFooterComp} />
      {/* <ContactUsInsidePage /> */}
      <ContactUsHome data={homeContactData} isEditable={isEditable} />
    </section>
  );
}
