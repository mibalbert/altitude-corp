import Image from "next/image";
import React from "react";

const LandingFooter = () => {
  return (
    <section className="relative pt-28 pb-32 bg-blue-600 overflow-hidden">
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
              <h2 className="mb-16 text-5xl md:text-6xl text-white font-bold tracking-px-n leading-tight">
                Start protecting your bussiness reveneue
              </h2>
              <div className="md:inline-block">
                <button
                  className="py-4 px-6 w-full text-blue-600 font-semibold rounded-xl shadow-4xl focus:ring focus:ring-blue-300 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
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
                      Germany
                    </a>
                  </li>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      United Kingdom
                    </a>
                  </li>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Spain
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      United States
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
                      Italy
                    </a>
                  </li>
                  <li className="mb-3.5">
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Morocco
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-200 font-medium leading-relaxed"
                      href="#"
                    >
                      Malaga
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
                      {" "}
                      Japan
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem quis nam tenetur itaque.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
