/**
 * landing-page/Hero.jsx
 */

import React from "react";
import prisma from "@/lib/prismadb";

const Hero = async ({ session }) => {
  const data = await prisma.user.findMany();

  return (
    <section className="h-[85vh]">
      <div className="w-full h-full  flex items-center justify-center ">
        {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
        {/* 
        {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
        <div className="w-44 h-44 bg-blue-600 rounded-full">
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
