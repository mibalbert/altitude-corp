/**
 * components/faq/faq-main.jsx
 */

"use client";

// import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import Contenteditable from "../../../editor/content-editable";
import {
  changeFaqPageHelpEmail,
  changeFaqPageQuestion1Subtitle,
  changeFaqPageQuestion1Title,
  changeFaqPageQuestion2Subtitle,
  changeFaqPageQuestion2Title,
  changeFaqPageQuestion3Subtitle,
  changeFaqPageQuestion3Title,
  changeFaqPageQuestion4Subtitle,
  changeFaqPageQuestion4Title,
  changeFaqPageQuestion5Subtitle,
  changeFaqPageQuestion5Title,
  changeFaqPageSubtitle,
  changeFaqPageTitle,
} from "@/app/actions/edit-web-pages/edit-faq-page/_faq-actions";
import { debounce } from "lodash";
import { useState } from "react";

const FAQMain = ({ data }) => {
  console.log("asdasd", data);
  const [faqPageTitle, setFaqPageTitle] = useState(data?.faqPageTitle || "");
  const [faqPageSubtitle, setFaqPageSubtitle] = useState(
    data?.faqPageSubtitle || ""
  );
  const [faqPageHelpEmail, setFaqPageHelpEmail] = useState(
    data?.faqPageHelpEmail || ""
  );

  const [faqPageQuestion1Title, setFaqPageQuestion1Title] = useState(
    data?.faqPageQuestion1Title || ""
  );
  const [faqPageQuestion2Title, setFaqPageQuestion2Title] = useState(
    data?.faqPageQuestion2Title || ""
  );
  const [faqPageQuestion3Title, setFaqPageQuestion3Title] = useState(
    data?.faqPageQuestion3Title || ""
  );
  const [faqPageQuestion4Title, setFaqPageQuestion4Title] = useState(
    data?.faqPageQuestion4Title || ""
  );
  const [faqPageQuestion5Title, setFaqPageQuestion5Title] = useState(
    data?.faqPageQuestion5Title || ""
  );
  const [faqPageQuestion1Subtitle, setFaqPageQuestion1Subtitle] = useState(
    data?.faqPageQuestion1Subtitle || ""
  );
  const [faqPageQuestion2Subtitle, setFaqPageQuestion2Subtitle] = useState(
    data?.faqPageQuestion2Subtitle || ""
  );
  const [faqPageQuestion3Subtitle, setFaqPageQuestion3Subtitle] = useState(
    data?.faqPageQuestion3Subtitle || ""
  );
  const [faqPageQuestion4Subtitle, setFaqPageQuestion4Subtitle] = useState(
    data?.faqPageQuestion4Subtitle || ""
  );
  const [faqPageQuestion5Subtitle, setFaqPageQuestion5Subtitle] = useState(
    data?.faqPageQuestion5Subtitle || ""
  );

  const debounceChangeFaqPageTitle = debounce(async (e) => {
    const res = await changeFaqPageTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageSubtitle = debounce(async (e) => {
    const res = await changeFaqPageSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageHelpEmail = debounce(async (e) => {
    const res = await changeFaqPageHelpEmail(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion1Title = debounce(async (e) => {
    const res = await changeFaqPageQuestion1Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion2Title = debounce(async (e) => {
    const res = await changeFaqPageQuestion2Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion3Title = debounce(async (e) => {
    const res = await changeFaqPageQuestion3Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion4Title = debounce(async (e) => {
    const res = await changeFaqPageQuestion4Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion5Title = debounce(async (e) => {
    const res = await changeFaqPageQuestion5Title(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion1Subtitle = debounce(async (e) => {
    const res = await changeFaqPageQuestion1Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion2Subtitle = debounce(async (e) => {
    const res = await changeFaqPageQuestion2Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion3Subtitle = debounce(async (e) => {
    const res = await changeFaqPageQuestion3Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion4Subtitle = debounce(async (e) => {
    const res = await changeFaqPageQuestion4Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeFaqPageQuestion5Subtitle = debounce(async (e) => {
    const res = await changeFaqPageQuestion5Subtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);

  const handleFaqPageTitleChange = (e) => {
    setFaqPageTitle(e);
    debounceChangeFaqPageTitle(e);
  };

  const handleFaqPageSubtitleChange = (e) => {
    setFaqPageSubtitle(e);
    debounceChangeFaqPageSubtitle(e);
  };
  const handleFaqPageHelpEmailChange = (e) => {
    setFaqPageHelpEmail(e);
    debounceChangeFaqPageHelpEmail(e);
  };
  const handleFaqPageQuestion1TitleChange = (e) => {
    setFaqPageQuestion1Title(e);
    debounceChangeFaqPageQuestion1Title(e);
  };
  const handleFaqPageQuestion2TitleChange = (e) => {
    setFaqPageQuestion2Title(e);
    debounceChangeFaqPageQuestion2Title(e);
  };
  const handleFaqPageQuestion3TitleChange = (e) => {
    setFaqPageQuestion3Title(e);
    debounceChangeFaqPageQuestion3Title(e);
  };
  const handleFaqPageQuestion4TitleChange = (e) => {
    setFaqPageQuestion4Title(e);
    debounceChangeFaqPageQuestion4Title(e);
  };
  const handleFaqPageQuestion5TitleChange = (e) => {
    setFaqPageQuestion5Title(e);
    debounceChangeFaqPageQuestion5Title(e);
  };
  const handleFaqPageQuestion1SubtitleChange = (e) => {
    setFaqPageQuestion1Subtitle(e);
    debounceChangeFaqPageQuestion1Subtitle(e);
  };
  const handleFaqPageQuestion2SubtitleChange = (e) => {
    setFaqPageQuestion2Subtitle(e);
    debounceChangeFaqPageQuestion2Subtitle(e);
  };
  const handleFaqPageQuestion3SubtitleChange = (e) => {
    setFaqPageQuestion3Subtitle(e);
    debounceChangeFaqPageQuestion3Subtitle(e);
  };
  const handleFaqPageQuestion4SubtitleChange = (e) => {
    setFaqPageQuestion4Subtitle(e);
    debounceChangeFaqPageQuestion4Subtitle(e);
  };
  const handleFaqPageQuestion5SubtitleChange = (e) => {
    setFaqPageQuestion5Subtitle(e);
    debounceChangeFaqPageQuestion5Subtitle(e);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 space-y-20">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl   font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <Contenteditable
                value={faqPageTitle}
                onChange={handleFaqPageTitleChange}
              />{" "}
            </h1>
            <div className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              <Contenteditable
                value={faqPageSubtitle}
                onChange={handleFaqPageSubtitleChange}
              />{" "}
              {/* <Link className="underline" href="#"> */}
              <Contenteditable
                value={faqPageHelpEmail}
                onChange={handleFaqPageHelpEmailChange}
              />{" "}
              {/* </Link> */}.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl grid gap-4 md:gap-8 lg:max-w-5xl">
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <div className="py-4">
                <Contenteditable
                  value={faqPageQuestion1Title}
                  onChange={handleFaqPageQuestion1TitleChange}
                />
              </div>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <div className="py-4">
                <Contenteditable
                  value={faqPageQuestion1Subtitle}
                  onChange={handleFaqPageQuestion1SubtitleChange}
                />{" "}
              </div>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <div className="py-4">
                {" "}
                <Contenteditable
                  value={faqPageQuestion2Title}
                  onChange={handleFaqPageQuestion2TitleChange}
                />
              </div>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <div className="py-4">
                <Contenteditable
                  value={faqPageQuestion2Subtitle}
                  onChange={handleFaqPageQuestion2SubtitleChange}
                />
              </div>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <div className="py-4">
                {" "}
                <Contenteditable
                  value={faqPageQuestion3Title}
                  onChange={handleFaqPageQuestion3TitleChange}
                />
              </div>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <div className="py-4">
                <Contenteditable
                  value={faqPageQuestion3Subtitle}
                  onChange={handleFaqPageQuestion3SubtitleChange}
                />
              </div>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <div className="py-4">
                {" "}
                <Contenteditable
                  value={faqPageQuestion4Title}
                  onChange={handleFaqPageQuestion4TitleChange}
                />
              </div>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <div className="py-4">
                <Contenteditable
                  value={faqPageQuestion4Subtitle}
                  onChange={handleFaqPageQuestion4SubtitleChange}
                />
              </div>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <div className="py-4">
                {" "}
                <Contenteditable
                  value={faqPageQuestion5Title}
                  onChange={handleFaqPageQuestion5TitleChange}
                />
              </div>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <div className="py-4">
                <Contenteditable
                  value={faqPageQuestion5Subtitle}
                  onChange={handleFaqPageQuestion5SubtitleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQMain;
