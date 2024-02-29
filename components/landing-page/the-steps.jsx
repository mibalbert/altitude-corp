/**
 * components/landing-page/the-steps.jsx
 */


import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const TheSteps = ({ data }) => {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
  ];
  return (
    <div className="h-auto">
      <StickyScroll content={content} />
    </div>

    // <div className="w-full py-32">
    //   <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
    //     <div className="space-y-3">
    //       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //         {data?.stepsTitle}
    //       </h2>
    //       <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
    //         {data?.stepsDesc}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="container grid md:grid-cols-3 items-start justify-center max-w-6xl gap-4 px-4 md:px-6">
    //     <div className="flex flex-col gap-1.5 items-center justify-center py-4 text-center md:py-8 md:grid md:gap-4 md:justify-start md:text-left">
    //       <div className="inline-flex items-center rounded-lg p-3.5">
    //         <MailIcon className="w-6 h-6" />
    //       </div>
    //       <div className="space-y-3">
    //         <h3 className="text-xl font-bold">{data?.stepsFirstCompTitle}</h3>
    //         <p className="text-base text-gray-500 md:text-lg/relaxed dark:text-gray-400">
    //           {data?.stepsFirstCompDesc}
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-1.5 items-center justify-center py-4 text-center md:py-8 md:grid md:gap-4 md:justify-start md:text-left">
    //       <div className="inline-flex items-center rounded-lg p-3.5">
    //         <InfoIcon className="w-6 h-6" />
    //       </div>
    //       <div className="space-y-3">
    //         <h3 className="text-xl font-bold">{data?.stepsSecCompTitle}</h3>
    //         <p className="text-base text-gray-500 md:text-lg/relaxed dark:text-gray-400">
    //           {data?.stepsSecCompDesc}
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-1.5 items-center justify-center py-4 text-center md:py-8 md:grid md:gap-4 md:justify-start md:text-left">
    //       <div className="inline-flex items-center rounded-lg p-3.5">
    //         <MergeIcon className="w-6 h-6" />
    //       </div>
    //       <div className="space-y-3">
    //         <h3 className="text-xl font-bold"> {data?.stepsThirdCompTitle}</h3>
    //         <p className="text-base text-gray-500 md:text-lg/relaxed dark:text-gray-400">
    //           {data?.stepsThirdCompDesc}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
