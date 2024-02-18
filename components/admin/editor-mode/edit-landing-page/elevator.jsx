/**
 * components/edit-landing-page/elevator.jsx
 */

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Contenteditable from "./content-editable-component";
import {
  changeElevatorFirstCompDesc,
  changeElevatorFirstCompTitle,
  changeElevatorSecCompDesc,
  changeElevatorSecCompTitle,
  changeElevatorSubtitle,
  changeElevatorTitle,
} from "@/app/actions/edit-web-pages/edit-home/_home-actions";
import { debounce } from "@/lib/utils";

const Elevator = ({ data }) => {
  console.log(data);
  const [elevatorTitle, setElevatorTitle] = useState(data?.elevatorTitle || "");
  const [elevatorSubtitle, setElevatorSubtitle] = useState(
    data?.elevatorSubtitle || ""
  );
  const [elevatorFirstCompTitle, setElevatorFirstCompTitle] = useState(
    data?.elevatorFirstCompTitle || ""
  );
  const [elevatorFirstCompDesc, setElevatorFirstCompDesc] = useState(
    data?.elevatorFirstCompDesc || ""
  );
  const [elevatorSecCompTitle, setElevatorSecCompTitle] = useState(
    data?.elevatorSecCompTitle || ""
  );
  const [elevatorSecCompDesc, setElevatorSecCompDesc] = useState(
    data?.elevatorSecCompDesc || ""
  );

  
  const debounceChangeElevatorTitle = debounce(async (e) => {
    const res = await changeElevatorTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeElevatorSubtitle = debounce(async (e) => {
    const res = await changeElevatorSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeElevatorFirstCompTitle = debounce(async (e) => {
    const res = await changeElevatorFirstCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeElevatorFirstCompDesc = debounce(async (e) => {
    const res = await changeElevatorFirstCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeElevatorSecCompTitle = debounce(async (e) => {
    const res = await changeElevatorSecCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeElevatorSecCompDesc = debounce(async (e) => {
    const res = await changeElevatorSecCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });

  const handleElevatorTitleChange = (e) => {
    // setIsTitleChanging(true);
    setElevatorTitle(e);
    debounceChangeElevatorTitle(e);
    // setIsTitleChanging(false);
  };
  const handleElevatorSubtitleChange = (e) => {
    // setIsTitleChanging(true);
    setElevatorSubtitle(e);
    debounceChangeElevatorSubtitle(e);
    // setIsTitleChanging(false);
  };
  const handleElevatorFirstCompTitleChange = (e) => {
    // setIsTitleChanging(true);
    setElevatorFirstCompTitle(e);
    debounceChangeElevatorFirstCompTitle(e);
    // setIsTitleChanging(false);
  };
  const handleElevatorFirstCompDescChange = (e) => {
    // setIsTitleChanging(true);
    setElevatorFirstCompDesc(e);
    debounceChangeElevatorFirstCompDesc(e);
    // setIsTitleChanging(false);
  };
  const handleElevatorSecCompTitleChange = (e) => {
    // setIsTitleChanging(true);
    setElevatorSecCompTitle(e);
    debounceChangeElevatorSecCompTitle(e);
    // setIsTitleChanging(false);
  };
  const handleElevatorSecCompDescChange = (e) => {
    // setIsTitleChanging(true);
    setElevatorSecCompDesc(e);
    debounceChangeElevatorSecCompDesc(e);
    // setIsTitleChanging(false);
  };

  return (
    <section className="py-[10rem] bg-blue-600 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <div className="xl:pt-12">
              <div className="mb-7 text-6xl md:text-7xl  text-white font-bold tracking-px-n leading-tight">
                <Contenteditable
                  value={elevatorTitle}
                  onChange={handleElevatorTitleChange}
                />
              </div>
              <div className="text-white text-opacity-80">
                <Contenteditable
                  value={elevatorSubtitle}
                  onChange={handleElevatorSubtitleChange}
                />
              </div>
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
                  <div className="mb-3 font-sans inline-block px-3.5 py-1.5 text-xs text-white font-semibold bg-red-500 uppercase tracking-px rounded-full">
                    {/* <Contenteditable
                      value={elevatorImageSubtitle}
                      onChange={handleElevatorSubtitleChange}
                    /> */}
                    Lorem
                  </div>
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
            <div className="flex flex-wrap h-full xl:pb-12">
              <div className="flex flex-wrap self-end -m-10">
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <h3 className="mb-5 text-2xl text-white font-bold leading-snug">
                      <Contenteditable
                        value={elevatorFirstCompTitle}
                        onChange={handleElevatorFirstCompTitleChange}
                      />
                    </h3>
                    <div className="text-white text-opacity-70 font-medium leading-relaxed">
                      <Contenteditable
                        value={elevatorFirstCompDesc}
                        onChange={handleElevatorFirstCompDescChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-10">
                  <div className="h-px bg-blue-500" />
                </div>
                <div className="w-full p-10">
                  <div className="md:max-w-sm">
                    <h3 className="mb-5 text-2xl text-white font-bold leading-snug">
                      <Contenteditable
                        value={elevatorSecCompTitle}
                        onChange={handleElevatorSecCompTitleChange}
                      />
                    </h3>
                    <div className="text-white text-opacity-70 font-medium leading-relaxed">
                      <Contenteditable
                        value={elevatorSecCompDesc}
                        onChange={handleElevatorSecCompDescChange}
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

export default Elevator;
