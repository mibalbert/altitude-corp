/**
 * components/admin/editor-mode/edit-landing-page/landing-footer.jsx
 */

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Contenteditable from "../../../editor/content-editable";
import { debounce } from "@/lib/utils";
import {
  changeLandingFooterButton,
  changeLandingFooterDesc,
  changeLandingFooterItem1,
  changeLandingFooterItem10,
  changeLandingFooterItem2,
  changeLandingFooterItem3,
  changeLandingFooterItem4,
  changeLandingFooterItem5,
  changeLandingFooterItem6,
  changeLandingFooterItem7,
  changeLandingFooterItem8,
  changeLandingFooterItem9,
  changeLandingFooterTitle,
} from "@/app/actions/edit-web-pages/edit-home/_home-actions";

const LandingFooter = ({ data }) => {
  const [landingFooterTitle, setLandingFooterTitle] = useState(
    data?.landingFooterTitle || ""
  );
  const [landingFooterDesc, setLandingFooterDesc] = useState(
    data?.landingFooterDesc || ""
  );
  const [landingFooterButton, setLandingFooterButton] = useState(
    data?.landingFooterButton || ""
  );
  const [landingFooterItem1, setLandingFooterItem1] = useState(
    data?.landingFooterItem1 || ""
  );
  const [landingFooterItem2, setLandingFooterItem2] = useState(
    data?.landingFooterItem2 || ""
  );
  const [landingFooterItem3, setLandingFooterItem3] = useState(
    data?.landingFooterItem3 || ""
  );
  const [landingFooterItem4, setLandingFooterItem4] = useState(
    data?.landingFooterItem4 || ""
  );
  const [landingFooterItem5, setLandingFooterItem5] = useState(
    data?.landingFooterItem5 || ""
  );
  const [landingFooterItem6, setLandingFooterItem6] = useState(
    data?.landingFooterItem6 || ""
  );
  const [landingFooterItem7, setLandingFooterItem7] = useState(
    data?.landingFooterItem7 || ""
  );
  const [landingFooterItem8, setLandingFooterItem8] = useState(
    data?.landingFooterItem8 || ""
  );
  const [landingFooterItem9, setLandingFooterItem9] = useState(
    data?.landingFooterItem9 || ""
  );
  const [landingFooterItem10, setLandingFooterItem10] = useState(
    data?.landingFooterItem10 || ""
  );

  const debounceChangeLandingFooterTitle = debounce(async (e) => {
    const res = await changeLandingFooterTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterDesc = debounce(async (e) => {
    const res = await changeLandingFooterDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterButton = debounce(async (e) => {
    const res = await changeLandingFooterButton(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem1 = debounce(async (e) => {
    const res = await changeLandingFooterItem1(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem2 = debounce(async (e) => {
    const res = await changeLandingFooterItem2(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem3 = debounce(async (e) => {
    const res = await changeLandingFooterItem3(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem4 = debounce(async (e) => {
    const res = await changeLandingFooterItem4(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem5 = debounce(async (e) => {
    const res = await changeLandingFooterItem5(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem6 = debounce(async (e) => {
    const res = await changeLandingFooterItem6(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem7 = debounce(async (e) => {
    const res = await changeLandingFooterItem7(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem8 = debounce(async (e) => {
    const res = await changeLandingFooterItem8(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem9 = debounce(async (e) => {
    const res = await changeLandingFooterItem9(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeLandingFooterItem10 = debounce(async (e) => {
    const res = await changeLandingFooterItem10(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });

  const handleLandingFooterTitleChange = (e) => {
    setLandingFooterTitle(e);
    debounceChangeLandingFooterTitle(e);
  };
  const handleLandingFooterDescChange = (e) => {
    setLandingFooterDesc(e);
    debounceChangeLandingFooterDesc(e);
  };
  const handleLandingFooterButtonChange = (e) => {
    setLandingFooterButton(e);
    debounceChangeLandingFooterButton(e);
  };
  const handleLandingFooterItem1Change = (e) => {
    setLandingFooterItem1(e);
    debounceChangeLandingFooterItem1(e);
  };
  const handleLandingFooterItem2Change = (e) => {
    setLandingFooterItem2(e);
    debounceChangeLandingFooterItem2(e);
  };
  const handleLandingFooterItem3Change = (e) => {
    setLandingFooterItem3(e);
    debounceChangeLandingFooterItem3(e);
  };
  const handleLandingFooterItem4Change = (e) => {
    setLandingFooterItem4(e);
    debounceChangeLandingFooterItem4(e);
  };
  const handleLandingFooterItem5Change = (e) => {
    setLandingFooterItem5(e);
    debounceChangeLandingFooterItem5(e);
  };
  const handleLandingFooterItem6Change = (e) => {
    setLandingFooterItem6(e);
    debounceChangeLandingFooterItem6(e);
  };
  const handleLandingFooterItem7Change = (e) => {
    setLandingFooterItem7(e);
    debounceChangeLandingFooterItem7(e);
  };
  const handleLandingFooterItem8Change = (e) => {
    setLandingFooterItem8(e);
    debounceChangeLandingFooterItem8(e);
  };
  const handleLandingFooterItem9Change = (e) => {
    setLandingFooterItem9(e);
    debounceChangeLandingFooterItem9(e);
  };
  const handleLandingFooterItem10Change = (e) => {
    setLandingFooterItem10(e);
    debounceChangeLandingFooterItem10(e);
  };

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
                <Contenteditable
                  value={landingFooterTitle}
                  onChange={handleLandingFooterTitleChange}
                />
              </h2>
              <div className="md:inline-block">
                <button
                  className="py-4 px-6 w-full text-blue-600 font-semibold rounded-xl shadow-4xl focus:ring focus:ring-blue-300 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                  type="button"
                >
                  <Contenteditable
                    value={landingFooterButton}
                    onChange={handleLandingFooterButtonChange}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-wrap -m-8 mb-10">
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem1}
                        onChange={handleLandingFooterItem1Change}
                      />
                    </div>
                  </li>
                  <li className="mb-3.5">
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem2}
                        onChange={handleLandingFooterItem2Change}
                      />
                    </div>
                  </li>
                  <li className="mb-3.5">
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem3}
                        onChange={handleLandingFooterItem3Change}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem4}
                        onChange={handleLandingFooterItem4Change}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem5}
                        onChange={handleLandingFooterItem5Change}
                      />
                    </div>
                  </li>
                  <li className="mb-3.5">
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem6}
                        onChange={handleLandingFooterItem6Change}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem7}
                        onChange={handleLandingFooterItem7Change}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/3 p-8">
                <ul>
                  <li className="mb-3.5">
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem8}
                        onChange={handleLandingFooterItem8Change}
                      />
                    </div>
                  </li>
                  <li className="mb-3.5">
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem9}
                        onChange={handleLandingFooterItem9Change}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="text-white hover:text-gray-200 font-medium leading-relaxed">
                      <Contenteditable
                        value={landingFooterItem10}
                        onChange={handleLandingFooterItem10Change}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-sm text-white text-opacity-50 font-medium leading-relaxed">
              <Contenteditable
                value={landingFooterDesc}
                onChange={handleLandingFooterDescChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
