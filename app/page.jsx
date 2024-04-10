/**
 * @app/page.tsx
 */

import ContactUsInsidePage from "@/components/contact-us/contact-us-inside-page";
import ContactUsHome from "@/components/landing-page/contact-us-home";
import Elevator from "@/components/landing-page/elevator";
import Hero from "@/components/landing-page/hero";
import HomeLatestPosts from "@/components/landing-page/home-latest-posts";
// import WorldWide from "@/components/landing-page/world-wide";
import NewHero from "@/components/landing-page/new-hero";
import Numbers from "@/components/landing-page/numbers";
import PeaceOfMind from "@/components/landing-page/peace-of-mind";
import Plans from "@/components/landing-page/plans";
import { InfiniteMovingReviewCards } from "@/components/landing-page/rev";
import Reviews from "@/components/landing-page/reviews";
import TheSteps from "@/components/landing-page/the-steps";
import ContactUs from "@/components/shared/contact-us";
import { authOptions } from "@/lib/auth-options";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";

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
  // const data = await prisma.home.findMany({
  //   include: {
  //     reviews: true,
  //   },
  // });

  let isEditable = false;



  console.log("Search Params", searchParams.editorMode);

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
    <section className="bg-white pt-12 ">
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
