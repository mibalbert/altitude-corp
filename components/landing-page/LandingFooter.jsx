import Image from "next/image";
import React from "react";

const LandingFooter = () => {
  return (
    <section className="relative pt-28 pb-32 bg-indigo-600 overflow-hidden">
      <Image
        width={500}
        height={500}
        alt=""
        className="absolute left-1/2 top-0 transform -translate-x-1/2"
        src="/vault-assets/images/footers/gradient3.svg"
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="lg:max-w-sm">
              <h2 className="mb-16 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight">
                Start protecting your assets
              </h2>
              <div className="md:inline-block">
                <button
                  className="py-4 px-6 w-full text-indigo-600 font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  type="button"
                >
                  Get A Free Quote
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-wrap -m-8 mb-10">
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Knowledge Base
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Indonesia
                    </a>
                  </li>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      USA
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Canada
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a
              className="text-sm text-white text-opacity-50 font-medium leading-relaxed"
              href="https://www.pixelrocket.store"
            >
              Want to download this free template? Visit pixelrocket.store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
