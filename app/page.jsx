/**
 * page.tsx
 */

import ContactUsInsidePage from "@/components/contact-us/contact-us-inside-page";
import Elevator from "@/components/landing-page/elevator";
import Hero from "@/components/landing-page/hero";
import LandingFooter from "@/components/landing-page/landing-footer";
import Numbers from "@/components/landing-page/numbers";
import PeaceOfMind from "@/components/landing-page/peace-of-mind";
import Plans from "@/components/landing-page/plans";
import { InfiniteMovingReviewCards } from "@/components/landing-page/rev";
import Reviews from "@/components/landing-page/reviews";
import TheSteps from "@/components/landing-page/the-steps";
import prisma from "@/lib/prismadb";

export default async function Home() {
  const data = await prisma.home.findMany({
    include: {
      reviews: true,
    },
  });

  return (
    <section className="">
      <Hero data={data[0]} />
      <InfiniteMovingReviewCards reviews={data[0].reviews} />
      <Elevator data={data[0]} />
      <PeaceOfMind data={data[0]} />
      <Numbers data={data[0]} />
      <TheSteps data={data[0]} />
      {/* <Plans data={data[0]} /> */}
      {/* <Reviews data={data[0]} /> */}
      <LandingFooter data={data[0]} />
      {/* <ContactUsInsidePage /> */}
    </section>
  );
}
