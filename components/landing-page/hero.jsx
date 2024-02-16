/**
 * landing-page/Hero.jsx
 */

import GSAP from "./gsap";

const Hero = async () => {
  const data = await prisma.home.findMany();

  return (
    <main>
      <GSAP data={data[0]} />
    </main>
  );
};

export default Hero;
