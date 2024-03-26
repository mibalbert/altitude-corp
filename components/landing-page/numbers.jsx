import Image from "next/image";
import React from "react";
import EditableComp from "../editableComp";

const Numbers = ({ data }) => {
  const numbersTitle = data?.find((el) => el.compName === "numbers-title");
  const numbersFirstTitle = data?.find(
    (el) => el.compName === "numbers-first-title"
  );
  const numbersFirstNumber = data?.find(
    (el) => el.compName === "numbers-first-number"
  );
  const numbersFirstDesc = data?.find(
    (el) => el.compName === "numbers-first-desc"
  );
  const numbersSecTitle = data?.find(
    (el) => el.compName === "numbers-sec-title"
  );
  const numbersSecNumber = data?.find(
    (el) => el.compName === "numbers-sec-number"
  );
  const numbersSecDesc = data?.find((el) => el.compName === "numbers-sec-desc");
  const numbersThirdTitle = data?.find(
    (el) => el.compName === "numbers-third-title"
  );
  const numbersThirdNumber = data?.find(
    (el) => el.compName === "numbers-third-number"
  );
  const numbersThirdDesc = data?.find(
    (el) => el.compName === "numbers-third-desc"
  );

  return (
    <section className="relative pt-28 pb-32 bg-blue-600 overflow-hidden">
      <Image
        width={500}
        height={500}
        alt=""
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        src="/vault-assets/images/numbers/gradient2.svg"
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="mb-16 border-b border-white border-opacity-30">
          {" "}
          <EditableComp isEditable={false} comp={numbersTitle} />
        </div>
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/3 p-8">
            <EditableComp isEditable={false} comp={numbersFirstTitle} />
            <EditableComp isEditable={false} comp={numbersFirstNumber} />
            <EditableComp isEditable={false} comp={numbersFirstDesc} />
          </div>
          <div className="w-full md:w-1/3 p-8">
            <EditableComp isEditable={false} comp={numbersSecTitle} />
            <EditableComp isEditable={false} comp={numbersSecNumber} />
            <EditableComp isEditable={false} comp={numbersSecDesc} />
          </div>
          <div className="w-full md:w-1/3 p-8">
            <EditableComp isEditable={false} comp={numbersThirdTitle} />
            <EditableComp isEditable={false} comp={numbersThirdNumber} />
            <EditableComp isEditable={false} comp={numbersThirdDesc} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
