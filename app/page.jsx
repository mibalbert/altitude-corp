/**
 * @app/page.tsx
 */

import ContactUsInsidePage from "@/components/contact-us/contact-us-inside-page";
import Elevator from "@/components/landing-page/elevator";
import Hero from "@/components/landing-page/hero";
import HomeLatestPosts from "@/components/landing-page/home-latest-posts";
import LandingFooter from "@/components/landing-page/landing-footer";
import NewHero from "@/components/landing-page/new-hero";
import Numbers from "@/components/landing-page/numbers";
import PeaceOfMind from "@/components/landing-page/peace-of-mind";
import Plans from "@/components/landing-page/plans";
import { InfiniteMovingReviewCards } from "@/components/landing-page/rev";
import Reviews from "@/components/landing-page/reviews";
import TheSteps from "@/components/landing-page/the-steps";
import prisma from "@/lib/prismadb";

export const metadata = {
  title: "ALTITUDE CORP | Home",
  description: "Best company to help you grow",
};

export default async function Home() {
  // const data = await prisma.home.findMany({
  //   include: {
  //     reviews: true,
  //   },
  // });

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
  return (
    <section className="bg-white pt-16  xl:pt-20 ">
      <Hero data={heroComp} />
      <InfiniteMovingReviewCards data={reviews} />
      <Elevator data={elevatorComp} />
      <PeaceOfMind data={peaceOfMindComp} />
      <Numbers data={numbersComp} />
      {/* <TheSteps data={stepsComp} /> */}
      <Plans data={plansComp} />
      <LandingFooter data={landingFooterComp} />
      <ContactUsInsidePage />
    </section>
  );
}
