import Image from "next/image";
import React from "react";

const Numbers = () => {
  return (
    <section className="relative pt-28 pb-32 bg-indigo-600 overflow-hidden">
      <Image
        width={500}
        height={500}
        alt=""
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src="/vault-assets/images/numbers/gradient2.svg"
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="mb-24 border-b border-white border-opacity-10">
          <h2 className="pb-24 text-6xl md:text-8xl xl:text-10xl text-white font-bold tracking-px-n leading-none md:max-w-3xl">
            Control who can access your digital assets
          </h2>
        </div>
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-gray-200 font-semibold leading-normal">
              Satisfied Clients
            </p>
            <h3 className="mb-4 text-6xl md:text-8xl xl:text-10xl text-white font-bold tracking-px-n leading-none">
              84,900
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed md:w-56">
              Vault has garnered more than 15k+ users.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-gray-200 font-semibold leading-normal">
              Downloads
            </p>
            <h3 className="mb-4 text-6xl md:text-8xl xl:text-10xl text-white font-bold tracking-px-n leading-none">
              3.2M+
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed md:w-56">
              Vault has garnered more than 15k+ users.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <p className="mb-6 text-gray-200 font-semibold leading-normal">
              Customer Reviews
            </p>
            <h3 className="mb-4 text-6xl md:text-8xl xl:text-10xl text-white font-bold tracking-px-n leading-none">
              21,394
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed md:w-56">
              Vault has garnered more than 15k+ users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
