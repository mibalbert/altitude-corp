/**
 * landing-page/Hero.jsx
 */

import GSAP from "./gsap";

const Hero = async ({ data }) => {
  return (
    <main>
      {/* <div className="relative  w-full h-[30vh] z-2 mt-7 flex items-center justify-center max-sm:hidden">
        <div className="absolute inset-x-0 inset-y-8 lg:inset-y-16">
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              background:
                "radial-gradient(95% 150% at 13.18% 0%, rgb(14, 115, 204) 0%, rgb(98, 75, 187) 29.47%, rgb(255, 69, 93) 52.87%, rgb(243, 88, 21) 86.38%, rgb(254, 213, 74) 100%)",
              opacity: 1,
              filter: "blur(0px)",
              transform: "none",
            }}
          ></div>
          <div
            style={{ background: "repeat var(--grid-bg)" }}
            className="absolute inset-0 z-1"
          ></div>
        </div>
        <div className="container grid grid-cols-8 gap-y-2 md:grid-cols-16 md:gap-x-2 lg:gap-x-3 lg:px-5 2lg:max-w-screen-2lg 2lg:gap-x-4 relative z-1">
          <div
            className="absolute -inset-2 mx-3 rounded-xl border  border-white/25 bg-white/5 p-4 shadow-[inset_0_0_8px_rgba(255,255,255,0.2)] backdrop-blur-xl will-change-transform md:-inset-2 md:mx-4 lg:-inset-y-grid-col lg:inset-x-0 lg:mx-5"
            style={{ transform: "none" }}
          >
            <div className="absolute inset-x-0 bottom-0"></div>
          </div>
          <div className="col-span-16 lg:px-grid-col">
            <div className="relative flex rounded bg-gradient-to-b from-gray-100 to-gray-200 p-2 shadow-xl shadow-black/10">
              <div className="w-full rounded-xs border"> */}
                <GSAP data={data} />
              {/* </div>
              <div className="absolute inset-2 z-3 rounded-xs shadow-[inset_0_4px_8px_rgba(0,0,0,.1),0_-1px_2px_rgba(0,0,0,.2),0_1px_2px_rgba(255,255,255,1)]"></div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Hero;
