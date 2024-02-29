import Image from "next/image";
import React from "react";

const Elevator = ({ data }) => {
  return (
    <section className="py-[10rem] bg-blue-600 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="xl:pt-12">
              <h2 className="mb-7 text-3xl md:text-4xl xl:text-5xl text-white font-bold tracking-px-n leading-tight">
                {data.elevatorTitle}
              </h2>
              <p className="text-white text-opacity-80">
                {data.elevatorSubtitle}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex flex-wrap justify-center">
              <div className="relative inline-block rounded-3xl overflow-hidden shadow-3xl transform hover:-translate-y-16 transition ease-in-out duration-1000">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  src="/images/secure.png"
                />
                <div
                  className="absolute bottom-0 left-0 bg-white bg-opacity-30 backdrop-blur-xl py-8 px-9"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <p className="mb-3 font-sans inline-block px-3.5 py-1.5 text-xs text-white font-semibold bg-red-500 uppercase tracking-px rounded-full">
                    Lorem
                  </p>
                  <h3 className="mb-3 text-xl font-bold font-heading">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-sm text-gray-600 font-semibold">
                    4096 nihil tenetur libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="flex flex-wrap h-full ">
              <div className="flex flex-wrap self-end -m-10">
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <h3 className="mb-5 text-2xl text-white font-bold leading-snug">
                      Adipisicing elit.
                    </h3>
                    <p className="text-white text-opacity-70 font-medium leading-relaxed">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>
                <div className="w-full px-10">
                  <div className="h-px bg-blue-500" />
                </div>
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <h3 className="mb-5 text-2xl text-white font-bold leading-snug">
                      Adipisicing elit.
                    </h3>
                    <p className="text-white text-opacity-70 font-medium leading-relaxed">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                  </div>
                </div>
                <div className="w-full px-10">
                  <div className="h-px bg-blue-500" />
                </div>
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <h3 className="mb-5 text-2xl text-white font-bold leading-snug">
                      24/7 Access
                    </h3>
                    <p className="text-white text-opacity-70 font-medium leading-relaxed">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
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

export default Elevator;
