import Image from "next/image";
import React from "react";
import EditableComp from "../editableComp";

const LandingFooter = ({ data }) => {
  const landingFooterTitle = data?.find(
    (el) => el.compName === "landing-footer-title"
  );
  const landingFooterText = data?.find(
    (el) => el.compName === "landing-footer-text"
  );

  return (
    <section className="relative pt-28 pb-32 bg-blue-600 overflow-hidden px-8 md:px-10">
      <Image
        width={500}
        height={500}
        alt=""
        className="absolute left-1/2 top-0 transform -translate-x-1/2"
        src="/vault-assets/images/footers/gradient3.svg"
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full sm:w-1/2 xl:w-2/3">
            <div className="lg:max-w-sm">
              <EditableComp isEditable={false} comp={landingFooterTitle} />
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
          <div className="w-full sm:w-1/2 xl:w-1/3">
            <div className="flex flex-wrap -m-8 mb-10">
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      Germany
                    </h3>
                  </li>
                  <li className="mb-3.5">
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      United Kingdom
                    </h3>
                  </li>
                  <li className="mb-3.5">
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      Spain
                    </h3>
                  </li>
                  <li>
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      United States
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      Italy
                    </h3>
                  </li>
                  <li className="mb-3.5">
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      Morocco
                    </h3>
                  </li>
                  <li>
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      Malaga
                    </h3>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      Indonesia
                    </h3>
                  </li>
                  <li className="mb-3.5">
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      {" "}
                      Japan
                    </h3>
                  </li>
                  <li>
                    <h3 className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      Canada
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <EditableComp isEditable={false} comp={landingFooterText} />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
