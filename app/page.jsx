/**
 * page.tsx
 */

import ContactUsInsidePage from "@/components/contact-us/contact-us-inside-page";
import {
  Hero,
  Elevator,
  PeaceOfMind,
  Numbers,
  Plans,
  Reviews,
  LandingFooter,
} from "@/components/landing-page/index";

export default async function Home() {
  let data;
  try {
    const res = await prisma.home.findMany();
    if (res) data = res;
  } catch (error) {
    console.log(error);
  }

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
