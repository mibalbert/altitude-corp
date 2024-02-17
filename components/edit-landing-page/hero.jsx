/**
 * landing-page/Hero.jsx
 */

import GSAP from "./gsap";
import prisma from "@/lib/prismadb";

const Hero = async ({data}) => {
  
  return (
    <main>
      <GSAP data={data} />
    </main>
  );
};

export default Hero;
