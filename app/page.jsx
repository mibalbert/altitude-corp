/**
 * page.tsx
 */

import {
  Hero,
  Elevator,
  PeaceOfMind,
  Numbers,
  Plans,
  Reviews,
  LandingFooter,
} from "@/components/landing-page/index";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";

export default async function Home() {
  const sess = await getServerSession(authOptions);

  let data;
  try {
    const res = await prisma.home.findMany();
    if (res) data = res;
  } catch (error) {
    console.log(error);
  }

  return (
    <section className=" ">
      <Hero session={sess} />
      <Elevator />
      <PeaceOfMind />
      <Numbers />
      <Plans />
      <Reviews />
      <LandingFooter />
    </section>
  );
}
