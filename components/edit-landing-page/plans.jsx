import React from "react";

const Plans = () => {
  return (
    <section className="pt-24 pb-28 bg-blueGray-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-24 text-5xl md:text-6xl font-bold font-heading text-center tracking-px-n leading-tight md:max-w-3xl mx-auto">
          Choose a plan that suits your requirements
        </h2>
        <div className="mb-24 md:max-w-6xl mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div
                className="flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl"
                style={{ backdropFilter: "blur(46px)" }}
              >
                <div>
                  <span className="mb-9 inline-block text-sm text-blue-600 font-semibold uppercase tracking-px leading-snug">
                    Basic
                  </span>
                  <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-none">
                    Free
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                    No credit card required
                  </p>
                  <p className="mb-9 text-gray-600 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Egestas lacus, blan dit pellentesque.
                  </p>
                </div>
                <button
                  className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  type="button"
                >
                  Get Started Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div
                className="relative flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blue-100 rounded-4xl shadow-9xl"
                // style={{ backdropFilter: "blur(46px)" }}
              >
                {/* <Image
                width={1500}
                height={1500}
                alt=""
                className="absolute -top-11 -right-8"
                src="/vault-assets/images/pricing/popular.png"
              />
              <Image
                width={1500}
                height={1500}
                alt=""
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                src="/vault-assets/images/pricing/gradient3.svg"
              /> */}
                <h2 className="absolute top-0 -left-9 text-2xl transform -skew-y-12 px-3 text-white bg-blue-600">
                  Most Popular
                </h2>
                <div className="relative z-10">
                  <span className="mb-9 inline-block text-sm text-blue-600 font-semibold uppercase tracking-px leading-snug">
                    Standard
                  </span>
                  <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-none">
                    $19/mo
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                    Billed Annually
                  </p>
                  <p className="mb-9 text-gray-600 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Egestas lacus, blan dit pellentesque.
                  </p>
                  <button
                    className="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 transition ease-in-out duration-200"
                    type="button"
                  >
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div
                className="flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-blueGray-100 rounded-4xl"
                style={{ backdropFilter: "blur(46px)" }}
              >
                <div>
                  <span className="mb-9 inline-block text-sm text-blue-600 font-semibold uppercase tracking-px leading-snug">
                    Pro
                  </span>
                  <h3 className="mb-1 text-4xl text-gray-900 font-bold leading-none">
                    $49/mo
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                    Billed Annually
                  </p>
                  <p className="mb-9 text-gray-600 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Egestas lacus, blan dit pellentesque.
                  </p>
                </div>
                <button
                  className="py-4 px-9 w-full font-semibold border border-blueGray-300 hover:border-blueGray-400 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  type="button"
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
