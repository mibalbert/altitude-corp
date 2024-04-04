import React from "react";
import "./new-mockup.css";

const NewMockup = () => {
  return (
    <>
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="shadow-[inset_0_-5px_14px_rgba(0,0,0,0.1)] absolute top-0 left-0 w-full h-full"></div>
        <div className="absolute top-0 left-0 w-full z-0 h-full flex items-end justify-center">
          <h1 className="text-[350px] font-bold text-blue-600/20 ">
            ALTITUDE
          </h1>
        </div>
        <div className="iphonex group">
          <div className="front">
            <div className="screen">
              <div className=" screen__view">
                <div className="altitudeLogo ">
                  {/* <span></span> */}
                  {/* <div>AJSKD</div> */}
                </div>
                <div className="hello">
                  <div className="text-center leading-tight">
                    We can get you there
                  </div>
                  {/* <div className="dribbbleLogo white ">
                    <span></span>
                  </div> */}
                </div>
              </div>
              <div className="screen__front">
                <div className="screen__front-speaker"></div>
                <div className="screen__front-camera"></div>
              </div>
            </div>
            <div className="front__line"></div>
            <div className="front__line front__line-second"></div>
          </div>
          <div className="phoneButtons phoneButtons-right"></div>
          <div className="phoneButtons phoneButtons-left"></div>
          <div className="phoneButtons phoneButtons-left2"></div>
          <div className="phoneButtons phoneButtons-left3"></div>
          <div className="back"></div>
        </div>

        {/* <div class="title">
          <p>IPHONE</p>
          <div class="title__svg"> */}
        {/* <video playsinline autoplay muted loop preload>
              <source
                src="http://iphoneh.surge.sh/assets/video/background.mp4"
                type="video/mp4"
              />
            </video> */}
        {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 285 80"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask id="mask" x="0" y="0" width="100%" height="100%">
                  <rect x="0" y="0" width="100%" height="100%" />
                  <text x="43.77%" y="71%">
                    X
                  </text>
                </mask>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" />
            </svg>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default NewMockup;
