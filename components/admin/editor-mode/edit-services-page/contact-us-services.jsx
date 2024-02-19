/**
 * components/contact-us/contact-us-services.jsx
 */

"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { Textarea } from "../../../ui/textarea";
import { useState } from "react";
import { debounce } from "lodash";
import {
  changeServicesPageContactUsMinSubtitle,
  changeServicesPageContactUsMinTitle,
  changeServicesPageContactUsSubtitle,
  changeServicesPageContactUsTitle,
} from "@/app/actions/edit-web-pages/edit-services-page/_services-actions";
import Contenteditable from "../edit-landing-page/content-editable-component";

const ContactUsServices = ({ data }) => {
  const [servicesPageContactUsTitle, setServicesPageContactUsTitle] = useState(
    data?.servicesPageContactUsTitle || ""
  );
  const [servicesPageContactUsSubtitle, setServicesPageContactUsSubtitle] =
    useState(data?.servicesPageContactUsSubtitle || "");
  const [servicesPageContactUsMinTitle, setServicesPageContactUsMinTitle] =
    useState(data?.servicesPageContactUsMinTitle || "");
  const [
    servicesPageContactUsMinSubtitle,
    setServicesPageContactUsMinSubtitle,
  ] = useState(data?.servicesPageContactUsMinSubtitle || "");

  const debounceChangeServicesPageContactUsTitle = debounce(async (e) => {
    const res = await changeServicesPageContactUsTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageContactUsSubtitle = debounce(async (e) => {
    const res = await changeServicesPageContactUsSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageContactUsMinTitle = debounce(async (e) => {
    const res = await changeServicesPageContactUsMinTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageContactUsMinSubtitle = debounce(async (e) => {
    const res = await changeServicesPageContactUsMinSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);

  const handleServicesPageContactUsTitleChange = (e) => {
    setServicesPageContactUsTitle(e);
    debounceChangeServicesPageContactUsTitle(e);
  };
  const handleServicesPageContactUsSubtitleChange = (e) => {
    setServicesPageContactUsSubtitle(e);
    debounceChangeServicesPageContactUsSubtitle(e);
  };
  const handleServicesPageContactUsMinTitleChange = (e) => {
    setServicesPageContactUsMinTitle(e);
    debounceChangeServicesPageContactUsMinTitle(e);
  };
  const handleServicesPageContactUsMinSubtitleChange = (e) => {
    setServicesPageContactUsMinSubtitle(e);
    debounceChangeServicesPageContactUsMinSubtitle(e);
  };

  return (
    <section className="w-full py-12 md:py-24 ">
      <div className="container grid grid-cols-2 divide-x    gap-4 px-4  md:px-6 lg:gap-10">
        <div className=" col-span-1 space-y-2   ">
          <h2 className="text-3xl font-bold text-blue-600 tracking-tighter sm:text-4xl md:text-5xl">
            <Contenteditable
              value={servicesPageContactUsTitle}
              onChange={handleServicesPageContactUsTitleChange}
            />
          </h2>
          <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <Contenteditable
              value={servicesPageContactUsSubtitle}
              onChange={handleServicesPageContactUsSubtitleChange}
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-center space-y-4 max-w-2xl w-full px-5 mx-auto pb-52">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
              <Contenteditable
                value={servicesPageContactUsMinTitle}
                onChange={handleServicesPageContactUsMinTitleChange}
              />
            </h1>
            <div className="  text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              <Contenteditable
                value={servicesPageContactUsMinSubtitle}
                onChange={handleServicesPageContactUsMinSubtitleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <Label className="text-base text-blue-600" htmlFor="first-name">
                First name
              </Label>
              <Input id="first-name" placeholder="Enter your first name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-base text-blue-600" htmlFor="last-name">
                Last name
              </Label>
              <Input id="last-name" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-base text-blue-600" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-base text-blue-600" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="min-h-[100px] max-h-[200px]"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              size="lg"
            >
              Submit
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsServices;
