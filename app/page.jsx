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

  // Fetch all necessary data in parallel
  const [compObj, reviews] = await Promise.all([
    prisma.pageObject.findMany({
      where: { page: "home" },
    }),
    prisma.reviews.findMany(),
  ]);

  // Group components by parentComp in a single pass
  const componentsByParentComp = compObj.reduce((acc, el) => {
    if (!acc[el.parentComp]) {
      acc[el.parentComp] = [];
    }
    acc[el.parentComp].push(el);
    return acc;
  }, {});

  return (
    <section className="bg-white">
      <Hero data={componentsByParentComp["Hero"]} isEditable={isEditable} />
      <InfiniteMovingReviewCards data={reviews} />
      <Elevator data={componentsByParentComp["Elevator"]} />
      <PeaceOfMind data={componentsByParentComp["PeaceOfMind"]} />
      <Numbers data={componentsByParentComp["Numbers"]} />
      <WorldWide data={componentsByParentComp["LandingFooter"]} />
      <ContactUsHome
        data={componentsByParentComp["ContactUsHome"]}
        isEditable={isEditable}
      />
    </section>
  );
}