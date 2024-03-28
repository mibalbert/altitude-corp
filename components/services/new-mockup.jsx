import React from "react";
import "./new-mockup.css";

const NewMockup = () => {
  return (
    <>
      {" "}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div class="iphonex">
          <div class="front">
            <div class="screen">
              <div class="screen__view">
                <div class="dribbbleLogo">
                  <span></span>
                </div>
                <div class="hello">
                  <p>Hello </p>
                  <div class="dribbbleLogo white">
                    <span></span>
                  </div>
                </div>
              </div>
              <div class="screen__front">
                <div class="screen__front-speaker"></div>
                <div class="screen__front-camera"></div>
              </div>
            </div>
            <div class="front__line"></div>
            <div class="front__line front__line-second"></div>
          </div>
          <div class="phoneButtons phoneButtons-right"></div>
          <div class="phoneButtons phoneButtons-left"></div>
          <div class="phoneButtons phoneButtons-left2"></div>
          <div class="phoneButtons phoneButtons-left3"></div>
          <div class="back"></div>
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
