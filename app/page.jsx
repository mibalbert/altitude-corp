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
import Reviews from "@/components/landing-page/reviews";

export default async function Home() {
  // let data;
  // try {
  //   const res = await prisma.home.findMany();
  //   if (res) data = res;
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <section className=" ">
      <Hero />
      <Elevator />
      <PeaceOfMind />
      <Numbers />
      <Plans />
      <Reviews />
      <LandingFooter />
      <ContactUsInsidePage />
    </section>
  );
}
