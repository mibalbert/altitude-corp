/**
 * component/admin/editor-mode/edit-landing-page/numbers.jsx
 */

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Contenteditable from "../../../editor/content-editable";
import { debounce } from "@/lib/utils";
import {
  changeNumbersDesc,
  changeNumbersFirstCompDesc,
  changeNumbersFirstCompNumbers,
  changeNumbersFirstCompTitle,
  changeNumbersSecCompTitle,
  changeNumbersSecCompNumbers,
  changeNumbersSecCompDesc,
  changeNumbersThirdCompDesc,
  changeNumbersThirdCompNumbers,
  changeNumbersThirdCompTitle,
  changeNumbersTitle,
} from "@/app/actions/edit-web-pages/edit-home/_home-actions";

const Numbers = ({ data }) => {
  const [numbersTitle, setNumbersTitle] = useState(data?.numbersTitle || "");
  const [numbersDesc, setNumbersDesc] = useState(data?.numbersDesc || "");
  const [numbersFirstCompTitle, setNumbersFirstCompTitle] = useState(
    data?.numbersFirstCompTitle || ""
  );
  const [numbersFirstCompNumbers, setNumbersFirstCompNumbers] = useState(
    data?.numbersFirstCompNumbers || ""
  );
  const [numbersFirstCompDesc, setNumbersFirstCompDesc] = useState(
    data?.numbersFirstCompDesc || ""
  );
  const [numbersSecCompTitle, setNumbersSecCompTitle] = useState(
    data?.numbersSecCompTitle || ""
  );
  const [numbersSecCompNumbers, setNumbersSecCompNumbers] = useState(
    data?.numbersSecCompNumbers || ""
  );
  const [numbersSecCompDesc, setNumbersSecCompDesc] = useState(
    data?.numbersSecCompDesc || ""
  );
  const [numbersThirdCompTitle, setNumbersThirdCompTitle] = useState(
    data?.numbersThirdCompTitle || ""
  );
  const [numbersThirdCompNumbers, setNumbersThirdCompNumbers] = useState(
    data?.numbersThirdCompNumbers || ""
  );
  const [numbersThirdCompDesc, setNumbersThirdCompDesc] = useState(
    data?.numbersThirdCompDesc || ""
  );

  const debounceChangeNumbersTitle = debounce(async (e) => {
    const res = await changeNumbersTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersDesc = debounce(async (e) => {
    const res = await changeNumbersDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersFirstCompTitle = debounce(async (e) => {
    const res = await changeNumbersFirstCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersFirstCompNumbers = debounce(async (e) => {
    const res = await changeNumbersFirstCompNumbers(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersFirstCompDesc = debounce(async (e) => {
    const res = await changeNumbersFirstCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersSecCompTitle = debounce(async (e) => {
    const res = await changeNumbersSecCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersSecCompNumbers = debounce(async (e) => {
    const res = await changeNumbersSecCompNumbers(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersSecCompDesc = debounce(async (e) => {
    const res = await changeNumbersThirdCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersThirdCompTitle = debounce(async (e) => {
    const res = await changeNumbersThirdCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersThirdCompNumbers = debounce(async (e) => {
    const res = await changeNumbersThirdCompNumbers(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeNumbersThirdCompDesc = debounce(async (e) => {
    const res = await changeNumbersThirdCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });

  const handleNumbersTitleChange = (e) => {
    setNumbersTitle(e);
    debounceChangeNumbersTitle(e);
  };
  const handleNumbersDescChange = (e) => {
    setNumbersDesc(e);
    debounceChangeNumbersDesc(e);
  };
  const handleNumbersFirstCompTitleChange = (e) => {
    setNumbersFirstCompTitle(e);
    debounceChangeNumbersFirstCompTitle(e);
  };
  const handleNumbersFirstCompNumbersChange = (e) => {
    setNumbersFirstCompNumbers(e);
    debounceChangeNumbersFirstCompNumbers(e);
  };
  const handleNumbersFirstCompDescChange = (e) => {
    setNumbersFirstCompDesc(e);
    debounceChangeNumbersFirstCompDesc(e);
  };
  const handleNumbersSecCompTitleChange = (e) => {
    setNumbersSecCompTitle(e);
    debounceChangeNumbersSecCompTitle(e);
  };
  const handleNumbersSecCompNumbersChange = (e) => {
    setNumbersSecCompNumbers(e);
    debounceChangeNumbersSecCompNumbers(e);
  };
  const handleNumbersSecCompDescChange = (e) => {
    setNumbersSecCompDesc(e);
    debounceChangeNumbersSecCompDesc(e);
  };
  const handleNumbersThirdCompTitleChange = (e) => {
    setNumbersThirdCompTitle(e);
    debounceChangeNumbersThirdCompTitle(e);
  };
  const handleNumbersThirdCompNumbersChange = (e) => {
    setNumbersThirdCompNumbers(e);
    debounceChangeNumbersThirdCompNumbers(e);
  };
  const handleNumbersThirdCompDescChange = (e) => {
    setNumbersThirdCompDesc(e);
    debounceChangeNumbersThirdCompDesc(e);
  };

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
        <div className="mb-20 border-b border-white border-opacity-10">
          <h2 className="pb-20 text-5xl md:text-6xl xl:text-7xl text-white font-bold tracking-px-n leading-none md:max-w-3xl">
            <Contenteditable
              value={numbersTitle}
              onChange={handleNumbersTitleChange}
            />
          </h2>
          <div className="pb-10 text-lg md:text-xl xl:text-2xl text-white font-bold tracking-px-n leading-none md:max-w-3xl">
            <Contenteditable
              value={numbersDesc}
              onChange={handleNumbersDescChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/3 p-8">
            <div className="mb-6 text-gray-200 font-semibold leading-normal">
              <Contenteditable
                value={numbersFirstCompTitle}
                onChange={handleNumbersFirstCompTitleChange}
              />
            </div>
            <h3 className="mb-4 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
              <Contenteditable
                value={numbersFirstCompNumbers}
                onChange={handleNumbersFirstCompNumbersChange}
              />
            </h3>
            <div className="text-gray-300 font-medium leading-relaxed md:w-56">
              <Contenteditable
                value={numbersFirstCompDesc}
                onChange={handleNumbersFirstCompDescChange}
              />{" "}
            </div>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <div className="mb-6 text-gray-200 font-semibold leading-normal">
              <Contenteditable
                value={numbersSecCompTitle}
                onChange={handleNumbersSecCompTitleChange}
              />
            </div>
            <h3 className="mb-4 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
              <Contenteditable
                value={numbersSecCompNumbers}
                onChange={handleNumbersSecCompNumbersChange}
              />
            </h3>
            <div className="text-gray-300 font-medium leading-relaxed md:w-56">
              <Contenteditable
                value={numbersSecCompDesc}
                onChange={handleNumbersSecCompDescChange}
              />{" "}
            </div>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <div className="mb-6 text-gray-200 font-semibold leading-normal">
              <Contenteditable
                value={numbersThirdCompTitle}
                onChange={handleNumbersThirdCompTitleChange}
              />{" "}
            </div>
            <h3 className="mb-4 text-4xl md:text-5xl xl:text-6xl text-white font-bold tracking-px-n leading-none">
              <Contenteditable
                value={numbersThirdCompNumbers}
                onChange={handleNumbersThirdCompNumbersChange}
              />
            </h3>
            <div className="text-gray-300 font-medium leading-relaxed md:w-56">
              <Contenteditable
                value={numbersThirdCompDesc}
                onChange={handleNumbersThirdCompDescChange}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
