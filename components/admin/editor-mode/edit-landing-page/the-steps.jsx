/**
 * components/admin/editor-mode/edit-landing-page/the-steps.jsx
 */

"use client";

import { useState } from "react";
import Contenteditable from "../../../editor/content-editable";
import { debounce } from "@/lib/utils";
import {
  changeStepsFirstCompDesc,
  changeStepsFirstCompTitle,
  changeStepsSecCompDesc,
  changeStepsSecCompTitle,
  changeStepsThirdCompDesc,
  changeStepsThirdCompTitle,
} from "@/app/actions/edit-web-pages/edit-home/_home-actions";

const TheSteps = ({ data }) => {
  const [stepsTitle, setStepsTitle] = useState(data?.stepsTitle || "");
  const [stepsDesc, setStepsDesc] = useState(data?.stepsDesc || "");
  const [stepsFirstCompTitle, setStepsFirstCompTitle] = useState(
    data?.stepsFirstCompTitle || ""
  );
  const [stepsFirstCompDesc, setStepsFirstCompDesc] = useState(
    data?.stepsFirstCompDesc || ""
  );
  const [stepsSecCompTitle, setStepsSecCompTitle] = useState(
    data?.stepsSecCompTitle || ""
  );
  const [stepsSecCompDesc, setStepsSecCompDesc] = useState(
    data?.stepsSecCompDesc || ""
  );
  const [stepsThirdCompTitle, setStepsThirdCompTitle] = useState(
    data?.stepsThirdCompTitle || ""
  );
  const [stepsThirdCompDesc, setStepsThirdCompDesc] = useState(
    data?.stepsThirdCompDesc || ""
  );

  const debounceChangeStepsTitle = debounce(async (e) => {
    const res = await changeStepsTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeStepsDesc = debounce(async (e) => {
    const res = await changeStepsDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeStepsFirstCompTitle = debounce(async (e) => {
    const res = await changeStepsFirstCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeStepsFirstCompDesc = debounce(async (e) => {
    const res = await changeStepsFirstCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeStepsSecCompTitle = debounce(async (e) => {
    const res = await changeStepsSecCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeStepsSecCompDesc = debounce(async (e) => {
    const res = await changeStepsSecCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeStepsThirdCompTitle = debounce(async (e) => {
    const res = await changeStepsThirdCompTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });
  const debounceChangeStepsThirdCompDesc = debounce(async (e) => {
    const res = await changeStepsThirdCompDesc(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  });

  const handleStepsTitleChange = (e) => {
    setStepsTitle(e);
    debounceChangeStepsTitle(e);
  };
  const handleStepsDescChange = (e) => {
    setStepsDesc(e);
    debounceChangeStepsDesc(e);
  };
  const handleStepsFirstCompTitleChange = (e) => {
    setStepsFirstCompTitle(e);
    debounceChangeStepsFirstCompTitle(e);
  };

  const handleStepsFirstCompDescChange = (e) => {
    setStepsFirstCompDesc(e);
    debounceChangeStepsFirstCompDesc(e);
  };

  const handleStepsSecCompTitleChange = (e) => {
    setStepsSecCompTitle(e);
    debounceChangeStepsSecCompTitle(e);
  };

  const handleStepsSecCompDescChange = (e) => {
    setStepsSecCompDesc(e);
    debounceChangeStepsSecCompDesc(e);
  };

  const handleStepsThirdCompTitleChange = (e) => {
    setStepsThirdCompTitle(e);
    debounceChangeStepsThirdCompTitle(e);
  };

  const handleStepsThirdCompDescChange = (e) => {
    setStepsThirdCompDesc(e);
    debounceChangeStepsThirdCompDesc(e);
  };

  return (
    <div className="w-full py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <Contenteditable
              value={stepsTitle}
              onChange={handleStepsTitleChange}
            />
          </h2>
          <div className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <Contenteditable
              value={stepsDesc}
              onChange={handleStepsDescChange}
            />
          </div>
        </div>
      </div>
      <div className="container grid md:grid-cols-3 items-start justify-center max-w-6xl gap-4 px-4 md:px-6">
        <div className="flex flex-col gap-1.5 items-center justify-center py-4 text-center md:py-8 md:grid md:gap-4 md:justify-start md:text-left">
          <div className="inline-flex items-center rounded-lg p-3.5">
            <MailIcon className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">
              <Contenteditable
                value={stepsFirstCompTitle}
                onChange={handleStepsFirstCompTitleChange}
              />
            </h3>
            <div className="text-base text-gray-500 md:text-lg/relaxed dark:text-gray-400">
              <Contenteditable
                value={stepsFirstCompDesc}
                onChange={handleStepsFirstCompDescChange}
              />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-center justify-center py-4 text-center md:py-8 md:grid md:gap-4 md:justify-start md:text-left">
          <div className="inline-flex items-center rounded-lg p-3.5">
            <InfoIcon className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">
              <Contenteditable
                value={stepsSecCompTitle}
                onChange={handleStepsSecCompTitleChange}
              />
            </h3>
            <div className="text-base text-gray-500 md:text-lg/relaxed dark:text-gray-400">
              <Contenteditable
                value={stepsSecCompDesc}
                onChange={handleStepsSecCompDescChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-center justify-center py-4 text-center md:py-8 md:grid md:gap-4 md:justify-start md:text-left">
          <div className="inline-flex items-center rounded-lg p-3.5">
            <MergeIcon className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">
              <Contenteditable
                value={stepsThirdCompTitle}
                onChange={handleStepsThirdCompTitleChange}
              />
            </h3>
            <div className="text-base text-gray-500 md:text-lg/relaxed dark:text-gray-400">
              <Contenteditable
                value={stepsThirdCompDesc}
                onChange={handleStepsThirdCompDescChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSteps;

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MergeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}
