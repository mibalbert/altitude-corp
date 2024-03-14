/**
 *
 */

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Contenteditable from "../../../editor/content-editable";
import {
  changeServicesPageLetUsHelpService1Desc,
  changeServicesPageLetUsHelpService1Title,
  changeServicesPageLetUsHelpService2Desc,
  changeServicesPageLetUsHelpService2Title,
  changeServicesPageLetUsHelpService3Desc,
  changeServicesPageLetUsHelpService3Title,
  changeServicesPageLetUsHelpSubtitle,
  changeServicesPageLetUsHelpTitle,
} from "@/app/actions/edit-web-pages/edit-services-page/_services-actions";
import { debounce } from "lodash";

const ServicesLetUsHelp = ({ data }) => {
  const [servicesPageLetUsHelpTitle, setservicesPageLetUsHelpTitle] = useState(
    data?.servicesPageLetUsHelpTitle || ""
  );
  const [servicesPageLetUsHelpSubtitle, setservicesPageLetUsHelpSubtitle] =
    useState(data?.servicesPageLetUsHelpSubtitle || "");

  const [
    servicesPageLetUsHelpService1Title,
    setServicesPageLetUsHelpService1Title,
  ] = useState(data?.servicesPageLetUsHelpService1Title || "");
  const [
    servicesPageLetUsHelpService2Title,
    setServicesPageLetUsHelpService2Title,
  ] = useState(data?.servicesPageLetUsHelpService2Title || "");
  const [
    servicesPageLetUsHelpService3Title,
    setServicesPageLetUsHelpService3Title,
  ] = useState(data?.servicesPageLetUsHelpService3Title || "");
  const [
    servicesPageLetUsHelpService1Desc,
    setServicesPageLetUsHelpService1Desc,
  ] = useState(data?.servicesPageLetUsHelpService1Desc || "");
  const [
    servicesPageLetUsHelpService2Desc,
    setServicesPageLetUsHelpService2Desc,
  ] = useState(data?.servicesPageLetUsHelpService2Desc || "");
  const [
    servicesPageLetUsHelpService3Desc,
    setServicesPageLetUsHelpService3Desc,
  ] = useState(data?.servicesPageLetUsHelpService3Desc || "");

  const debounceChangeServicesPageLetUsHelpTitle = debounce(async (e) => {
    const res = await changeServicesPageLetUsHelpTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeServicesPageLetUsHelpSubtitle = debounce(async (e) => {
    const res = await changeServicesPageLetUsHelpSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeServicesPageLetUsHelpService1Title = debounce(
    async (e) => {
      const res = await changeServicesPageLetUsHelpService1Title(data.id, e);
      if (res.ok) {
        console.log(res.message);
      }
    },
    300
  );
  const debounceChangeServicesPageLetUsHelpService2Title = debounce(
    async (e) => {
      const res = await changeServicesPageLetUsHelpService2Title(data.id, e);
      if (res.ok) {
        console.log(res.message);
      }
    },
    300
  );
  const debounceChangeServicesPageLetUsHelpService3Title = debounce(
    async (e) => {
      const res = await changeServicesPageLetUsHelpService3Title(data.id, e);
      if (res.ok) {
        console.log(res.message);
      }
    },
    300
  );
  const debounceChangeServicesPageLetUsHelpService1Desc = debounce(
    async (e) => {
      const res = await changeServicesPageLetUsHelpService1Desc(data.id, e);
      if (res.ok) {
        console.log(res.message);
      }
    },
    300
  );
  const debounceChangeServicesPageLetUsHelpService2Desc = debounce(
    async (e) => {
      const res = await changeServicesPageLetUsHelpService2Desc(data.id, e);
      if (res.ok) {
        console.log(res.message);
      }
    },
    300
  );
  const debounceChangeServicesPageLetUsHelpService3Desc = debounce(
    async (e) => {
      const res = await changeServicesPageLetUsHelpService3Desc(data.id, e);
      if (res.ok) {
        console.log(res.message);
      }
    },
    300
  );

  const handleservicesPageLetUsHelpTitleChange = (e) => {
    setservicesPageLetUsHelpTitle(e);
    debounceChangeServicesPageLetUsHelpTitle(e);
  };
  const handleservicesPageLetUsHelpSubtitleChange = (e) => {
    setservicesPageLetUsHelpSubtitle(e);
    debounceChangeServicesPageLetUsHelpSubtitle(e);
  };

  const handleservicesPageLetUsHelpService1TitleChange = (e) => {
    setServicesPageLetUsHelpService1Title(e);
    debounceChangeServicesPageLetUsHelpService1Title(e);
  };
  const handleservicesPageLetUsHelpService2TitleChange = (e) => {
    setServicesPageLetUsHelpService2Title(e);
    debounceChangeServicesPageLetUsHelpService2Title(e);
  };
  const handleservicesPageLetUsHelpService3TitleChange = (e) => {
    setServicesPageLetUsHelpService3Title(e);
    debounceChangeServicesPageLetUsHelpService3Title(e);
  };

  const handleservicesPageLetUsHelpService1DescChange = (e) => {
    setServicesPageLetUsHelpService1Desc(e);
    debounceChangeServicesPageLetUsHelpService1Desc(e);
  };
  const handleservicesPageLetUsHelpService2DescChange = (e) => {
    setServicesPageLetUsHelpService2Desc(e);
    debounceChangeServicesPageLetUsHelpService2Desc(e);
  };
  const handleservicesPageLetUsHelpService3DescChange = (e) => {
    setServicesPageLetUsHelpService3Desc(e);
    debounceChangeServicesPageLetUsHelpService3Desc(e);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <Contenteditable
              value={servicesPageLetUsHelpTitle}
              onChange={handleservicesPageLetUsHelpTitleChange}
            />
          </h2>
          <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <Contenteditable
              value={servicesPageLetUsHelpSubtitle}
              onChange={handleservicesPageLetUsHelpSubtitleChange}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-3">
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <Image
              alt="Service 1"
              className="aspect-video overflow-hidden w-1/2 rounded-xl object-cover object-center"
              height="250"
              src="/placeholder.svg"
              width="400"
            />
            <div className="space-y-2 mt-4 w-1/2">
              <h3 className="text-xl font-bold">
                <Contenteditable
                  value={servicesPageLetUsHelpService1Title}
                  onChange={handleservicesPageLetUsHelpService1TitleChange}
                />
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <Contenteditable
                  value={servicesPageLetUsHelpService1Desc}
                  onChange={handleservicesPageLetUsHelpService1DescChange}
                />{" "}
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <Image
              alt="Service 2"
              className="aspect-video overflow-hidden rounded-xl w-1/2 object-cover object-center"
              height="250"
              src="/placeholder.svg"
              width="400"
            />
            <div className="space-y-2 mt-4 w-1/2">
              <h3 className="text-xl font-bold">
                {" "}
                <Contenteditable
                  value={servicesPageLetUsHelpService2Title}
                  onChange={handleservicesPageLetUsHelpService2TitleChange}
                />
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <Contenteditable
                  value={servicesPageLetUsHelpService2Desc}
                  onChange={handleservicesPageLetUsHelpService2DescChange}
                />{" "}
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
            <Image
              alt="Service 3"
              className="aspect-video overflow-hidden rounded-xl w-1/2 object-cover object-center"
              height="250"
              src="/placeholder.svg"
              width="400"
            />
            <div className="space-y-2 mt-4 w-1/2">
              <h3 className="text-xl font-bold">
                {" "}
                <Contenteditable
                  value={servicesPageLetUsHelpService3Title}
                  onChange={handleservicesPageLetUsHelpService3TitleChange}
                />
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <Contenteditable
                  value={servicesPageLetUsHelpService3Desc}
                  onChange={handleservicesPageLetUsHelpService3DescChange}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLetUsHelp;
