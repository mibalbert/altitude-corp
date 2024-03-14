/**
 * comopnents/edit-landing-page/peace-of-mind
 */

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Contenteditable from "../../../editor/content-editable";
import {
  changePeaceOfMindDesc,
  changePeaceOfMindFirstCompDesc,
  changePeaceOfMindFirstCompTitle,
  changePeaceOfMindSecCompDesc,
  changePeaceOfMindSecCompTitle,
  changePeaceOfMindTitle,
} from "@/app/actions/edit-web-pages/edit-home/_home-actions";
import { debounce } from "@/lib/utils";

const PeaceOfMind = ({ data }) => {
  const [peaceOfMindTitle, setPieceOfMindTitle] = useState(
    data?.peaceOfMindTitle || ""
  );
  const [peaceOfMindDesc, setPieceOfMindDesc] = useState(
    data?.peaceOfMindDesc || ""
  );
  const [peaceOfMindFirstCompTitle, setPieceOfMindFirstCompTitle] = useState(
    data?.peaceOfMindFirstCompTitle || ""
  );
  const [peaceOfMindFirstCompDesc, setPieceOfMindFirstCompDesc] = useState(
    data?.peaceOfMindFirstCompDesc || ""
  );
  const [peaceOfMindSecCompTitle, setPieceOfMindSecCompTitle] = useState(
    data?.peaceOfMindSecCompTitle || ""
  );
  const [peaceOfMindSecCompDesc, setPieceOfMindSecCompDesc] = useState(
    data?.peaceOfMindSecCompDesc || ""
  );

  const debouncePeaceOfMindTitle = debounce(async (e) => {
    const res = await changePeaceOfMindTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debouncePeaceOfMindDesc = debounce(async (e) => {
    const res = await changePeaceOfMindDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debouncePeaceOfMindFirstCompTitle = debounce(async (e) => {
    const res = await changePeaceOfMindFirstCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debouncePeaceOfMindFirstCompDesc = debounce(async (e) => {
    const res = await changePeaceOfMindFirstCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debouncePeaceOfMindSecCompTitle = debounce(async (e) => {
    const res = await changePeaceOfMindSecCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debouncePeaceOfMindSecCompDesc = debounce(async (e) => {
    const res = await changePeaceOfMindSecCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const handlePeaceOfMindTitleChange = (e) => {
    setPieceOfMindTitle(e);
    debouncePeaceOfMindTitle(e);
  };
  const handlePeaceOfMindDescChange = (e) => {
    setPieceOfMindDesc(e);
    debouncePeaceOfMindDesc(e);
  };
  const handlePeaceOfMindFirstCompTitleChange = (e) => {
    setPieceOfMindFirstCompTitle(e);
    debouncePeaceOfMindFirstCompTitle(e);
  };
  const handlePeaceOfMindFirstCompDescChange = (e) => {
    setPieceOfMindFirstCompDesc(e);
    debouncePeaceOfMindFirstCompDesc(e);
  };
  const handlePeaceOfMindSecCompTitleChange = (e) => {
    setPieceOfMindSecCompTitle(e);
    debouncePeaceOfMindSecCompTitle(e);
  };
  const handlePeaceOfMindSecCompDescChange = (e) => {
    setPieceOfMindSecCompDesc(e);
    debouncePeaceOfMindSecCompDesc(e);
  };

  return (
    <section className="pt-28 pb-40 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="mb-20 text-4xl md:text-6xl xl:text-7xl font-bold font-heading tracking-px-n leading-none">
          <Contenteditable
            value={peaceOfMindTitle}
            onChange={handlePeaceOfMindTitleChange}
          />
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
                  <Contenteditable
                    value={peaceOfMindDesc}
                    onChange={handlePeaceOfMindDescChange}
                  />
                </h3>
              </div>
              <div className="flex flex-wrap -m-8">
                <div className="w-auto md:w-1/2 p-8">
                  <div className="md:max-w-xs">
                    <h3 className="mb-4 text-lg text-blue-600 font-semibold">
                      <Contenteditable
                        value={peaceOfMindFirstCompTitle}
                        onChange={handlePeaceOfMindFirstCompTitleChange}
                      />
                    </h3>
                    <div className="text-gray-900 font-medium">
                      <Contenteditable
                        value={peaceOfMindFirstCompDesc}
                        onChange={handlePeaceOfMindFirstCompDescChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-auto md:w-1/2 p-8">
                  <div className="md:max-w-xs">
                    <h3 className="mb-4 text-lg text-blue-600 font-semibold">
                      <Contenteditable
                        value={peaceOfMindSecCompTitle}
                        onChange={handlePeaceOfMindSecCompTitleChange}
                      />
                    </h3>
                    <div className="text-gray-900 font-medium">
                      <Contenteditable
                        value={peaceOfMindSecCompDesc}
                        onChange={handlePeaceOfMindSecCompDescChange}
                      />
                    </div>
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
