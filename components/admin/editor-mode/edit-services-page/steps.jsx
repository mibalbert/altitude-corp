/**
 * components/services/steps.jsx
 */

"use client";

import { debounce } from "lodash";
import { useState } from "react";
import Contenteditable from "../../../editor/content-editable";
import {
  changeServicesPageSteps1Badge,
  changeServicesPageSteps1Subtitle,
  changeServicesPageSteps1Title,
  changeServicesPageSteps2Badge,
  changeServicesPageSteps2Subtitle,
  changeServicesPageSteps2Title,
  changeServicesPageSteps3Badge,
  changeServicesPageSteps3Subtitle,
  changeServicesPageSteps3Title,
  changeServicesPageSteps4Badge,
  changeServicesPageSteps4Subtitle,
  changeServicesPageSteps4Title,
  changeServicesPageSteps5Badge,
  changeServicesPageSteps5Subtitle,
  changeServicesPageSteps5Title,
  changeServicesPageStepsBadge,
  changeServicesPageStepsTitle,
} from "@/app/actions/edit-web-pages/edit-services-page/_services-actions";

const Steps = ({ data }) => {
  const [servicesPageStepsBadge, setServicesPageStepsBadge] = useState(
    data?.servicesPageStepsBadge || ""
  );
  const [servicesPageStepsTitle, setServicesPageStepsTitle] = useState(
    data?.servicesPageStepsTitle || ""
  );
  const [servicesPageSteps1Badge, setServicesPageSteps1Badge] = useState(
    data?.servicesPageSteps1Badge || ""
  );
  const [servicesPageSteps2Badge, setServicesPageSteps2Badge] = useState(
    data?.servicesPageSteps2Badge || ""
  );
  const [servicesPageSteps3Badge, setServicesPageSteps3Badge] = useState(
    data?.servicesPageSteps3Badge || ""
  );
  const [servicesPageSteps4Badge, setServicesPageSteps4Badge] = useState(
    data?.servicesPageSteps4Badge || ""
  );
  const [servicesPageSteps5Badge, setServicesPageSteps5Badge] = useState(
    data?.servicesPageSteps5Badge || ""
  );
  const [servicesPageSteps1Title, setServicesPageSteps1Title] = useState(
    data?.servicesPageSteps1Title || ""
  );
  const [servicesPageSteps2Title, setServicesPageSteps2Title] = useState(
    data?.servicesPageSteps2Title || ""
  );
  const [servicesPageSteps3Title, setServicesPageSteps3Title] = useState(
    data?.servicesPageSteps3Title || ""
  );
  const [servicesPageSteps4Title, setServicesPageSteps4Title] = useState(
    data?.servicesPageSteps4Title || ""
  );
  const [servicesPageSteps5Title, setServicesPageSteps5Title] = useState(
    data?.servicesPageSteps5Title || ""
  );
  const [servicesPageSteps1Subtitle, setServicesPageSteps1Subtitle] = useState(
    data?.servicesPageSteps1Subtitle || ""
  );
  const [servicesPageSteps2Subtitle, setServicesPageSteps2Subtitle] = useState(
    data?.servicesPageSteps2Subtitle || ""
  );
  const [servicesPageSteps3Subtitle, setServicesPageSteps3Subtitle] = useState(
    data?.servicesPageSteps3Subtitle || ""
  );
  const [servicesPageSteps4Subtitle, setServicesPageSteps4Subtitle] = useState(
    data?.servicesPageSteps4Subtitle || ""
  );
  const [servicesPageSteps5Subtitle, setServicesPageSteps5Subtitle] = useState(
    data?.servicesPageSteps5Subtitle || ""
  );

  const debounceChangeServicesPageStepsBadge = debounce(async (e) => {
    const res = await changeServicesPageStepsBadge(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);

  const debounceChangeServicesPageStepsTitle = debounce(async (e) => {
    const res = await changeServicesPageStepsTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps1Badge = debounce(async (e) => {
    const res = await changeServicesPageSteps1Badge(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps2Badge = debounce(async (e) => {
    const res = await changeServicesPageSteps2Badge(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps3Badge = debounce(async (e) => {
    const res = await changeServicesPageSteps3Badge(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps4Badge = debounce(async (e) => {
    const res = await changeServicesPageSteps4Badge(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps5Badge = debounce(async (e) => {
    const res = await changeServicesPageSteps5Badge(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps1Title = debounce(async (e) => {
    const res = await changeServicesPageSteps1Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps2Title = debounce(async (e) => {
    const res = await changeServicesPageSteps2Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps3Title = debounce(async (e) => {
    const res = await changeServicesPageSteps3Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps4Title = debounce(async (e) => {
    const res = await changeServicesPageSteps4Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps5Title = debounce(async (e) => {
    const res = await changeServicesPageSteps5Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps1Subtitle = debounce(async (e) => {
    const res = await changeServicesPageSteps1Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps2Subtitle = debounce(async (e) => {
    const res = await changeServicesPageSteps2Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps3Subtitle = debounce(async (e) => {
    const res = await changeServicesPageSteps3Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps4Subtitle = debounce(async (e) => {
    const res = await changeServicesPageSteps4Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const debounceChangeServicesPageSteps5Subtitle = debounce(async (e) => {
    const res = await changeServicesPageSteps5Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 0);
  const handleServicesPageStepsBadgeChange = (e) => {
    setServicesPageStepsBadge(e);
    debounceChangeServicesPageStepsBadge(e);
  };

  const handleServicesPageStepsTitleChange = (e) => {
    setServicesPageStepsTitle(e);
    debounceChangeServicesPageStepsTitle(e);
  };

  const handleServicesPageSteps1BadgeChange = (e) => {
    setServicesPageSteps1Badge(e);
    debounceChangeServicesPageSteps1Badge(e);
  };
  const handleServicesPageSteps2BadgeChange = (e) => {
    setServicesPageSteps2Badge(e);
    debounceChangeServicesPageSteps2Badge(e);
  };
  const handleServicesPageSteps3BadgeChange = (e) => {
    setServicesPageSteps3Badge(e);
    debounceChangeServicesPageSteps3Badge(e);
  };
  const handleServicesPageSteps4BadgeChange = (e) => {
    setServicesPageSteps4Badge(e);
    debounceChangeServicesPageSteps4Badge(e);
  };
  const handleServicesPageSteps5BadgeChange = (e) => {
    setServicesPageSteps5Badge(e);
    debounceChangeServicesPageSteps5Badge(e);
  };

  const handleServicesPageSteps1TitleChange = (e) => {
    setServicesPageSteps1Title(e);
    debounceChangeServicesPageSteps1Title(e);
  };
  const handleServicesPageSteps2TitleChange = (e) => {
    setServicesPageSteps2Title(e);
    debounceChangeServicesPageSteps2Title(e);
  };
  const handleServicesPageSteps3TitleChange = (e) => {
    setServicesPageSteps3Title(e);
    debounceChangeServicesPageSteps3Title(e);
  };
  const handleServicesPageSteps4TitleChange = (e) => {
    setServicesPageSteps4Title(e);
    debounceChangeServicesPageSteps4Title(e);
  };
  const handleServicesPageSteps5TitleChange = (e) => {
    setServicesPageSteps5Title(e);
    debounceChangeServicesPageSteps5Title(e);
  };
  const handleServicesPageSteps1SubtitleChange = (e) => {
    setServicesPageSteps1Subtitle(e);
    debounceChangeServicesPageSteps1Subtitle(e);
  };
  const handleServicesPageSteps2SubtitleChange = (e) => {
    setServicesPageSteps2Subtitle(e);
    debounceChangeServicesPageSteps2Subtitle(e);
  };
  const handleServicesPageSteps3SubtitleChange = (e) => {
    setServicesPageSteps3Subtitle(e);
    debounceChangeServicesPageSteps3Subtitle(e);
  };
  const handleServicesPageSteps4SubtitleChange = (e) => {
    setServicesPageSteps4Subtitle(e);
    debounceChangeServicesPageSteps4Subtitle(e);
  };
  const handleServicesPageSteps5SubtitleChange = (e) => {
    setServicesPageSteps5Subtitle(e);
    debounceChangeServicesPageSteps5Subtitle(e);
  };

  return (
    <section className="w-full py-12 md:py-24  ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 ">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-semibold text-gray-50 dark:bg-blue-500 dark:text-gray-50">
              <Contenteditable
                value={servicesPageStepsBadge}
                onChange={handleServicesPageStepsBadgeChange}
              />{" "}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/normal">
              <Contenteditable
                value={servicesPageStepsTitle}
                onChange={handleServicesPageStepsTitleChange}
              />{" "}
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"></p>
          </div>
          <section className="w-full grid grid-cols-4 gap-10   py-12 md:py-24">
            <div className="col-span-1 border-r-2 border-blue-400 boreder-rounde"></div>

            <div className="flex flex-col gap-10 col-span-3 ">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  <Contenteditable
                    value={servicesPageSteps1Badge}
                    onChange={handleServicesPageSteps1BadgeChange}
                  />{" "}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
                  <Contenteditable
                    value={servicesPageSteps1Title}
                    onChange={handleServicesPageSteps1TitleChange}
                  />{" "}
                </h2>
                <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  <Contenteditable
                    value={servicesPageSteps1Subtitle}
                    onChange={handleServicesPageSteps1SubtitleChange}
                  />{" "}
                </div>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  <Contenteditable
                    value={servicesPageSteps2Badge}
                    onChange={handleServicesPageSteps2BadgeChange}
                  />{" "}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
                  <Contenteditable
                    value={servicesPageSteps2Title}
                    onChange={handleServicesPageSteps2TitleChange}
                  />{" "}
                </h2>
                <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  <Contenteditable
                    value={servicesPageSteps2Subtitle}
                    onChange={handleServicesPageSteps2SubtitleChange}
                  />{" "}
                </div>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  <Contenteditable
                    value={servicesPageSteps3Badge}
                    onChange={handleServicesPageSteps3BadgeChange}
                  />{" "}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
                  <Contenteditable
                    value={servicesPageSteps3Title}
                    onChange={handleServicesPageSteps3TitleChange}
                  />{" "}
                </h2>
                <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  <Contenteditable
                    value={servicesPageSteps3Subtitle}
                    onChange={handleServicesPageSteps3SubtitleChange}
                  />{" "}
                </div>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  <Contenteditable
                    value={servicesPageSteps4Badge}
                    onChange={handleServicesPageSteps4BadgeChange}
                  />{" "}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
                  <Contenteditable
                    value={servicesPageSteps4Title}
                    onChange={handleServicesPageSteps4TitleChange}
                  />{" "}
                </h2>
                <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  <Contenteditable
                    value={servicesPageSteps4Subtitle}
                    onChange={handleServicesPageSteps4SubtitleChange}
                  />{" "}
                </div>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  <Contenteditable
                    value={servicesPageSteps5Badge}
                    onChange={handleServicesPageSteps5BadgeChange}
                  />{" "}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
                  <Contenteditable
                    value={servicesPageSteps5Title}
                    onChange={handleServicesPageSteps5TitleChange}
                  />{" "}
                </h2>
                <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  <Contenteditable
                    value={servicesPageSteps5Subtitle}
                    onChange={handleServicesPageSteps5SubtitleChange}
                  />{" "}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Steps;
