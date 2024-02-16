import Image from "next/image";
import React from "react";

const PeaceOfMind = () => {
  return (
    <section className="pt-28 pb-40 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-20 text-4xl md:text-6xl xl:text-7xl font-bold font-heading tracking-px-n leading-none">
          Enjoy peace of mind
        </h2>
        <div className="flex flex-wrap xl:items-center -m-8 xl:-m-10">
          <div className="w-full md:w-1/2 xl:w-auto p-8 xl:p-10">
            <a className="block overflow-hidden rounded-3xl" href="#">
              <Image
                width={500}
                height={500}
                alt=""
                className="w-full transform hover:scale-105 transition ease-in-out duration-1000"
                src="/images/video.png"
              />
            </a>
          </div>
          <div className="w-full md:w-1/2 xl:flex-1 p-8 xl:p-10">
            <div className="md:max-w-xl">
              <div className="mb-11 pb-32 border-b">
                <h3 className="text-lg font-semibold md:max-w-lg">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </h3>
              </div>
              <div className="flex flex-wrap -m-8">
                <div className="w-auto md:w-1/2 p-8">
                  <div className="md:max-w-xs">
                    <h3 className="mb-4 text-lg text-blue-600 font-semibold">
                      24/7 Secure Access
                    </h3>
                    <p className="text-gray-900 font-medium">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
                <div className="w-auto md:w-1/2 p-8">
                  <div className="md:max-w-xs">
                    <h3 className="mb-4 text-lg text-blue-600 font-semibold">
                      Access Logs
                    </h3>
                    <p className="text-gray-900 font-medium">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceOfMind;
