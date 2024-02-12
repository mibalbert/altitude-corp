import { Activity, GitCompareArrowsIcon, Landmark } from "lucide-react";
import React from "react";

const Values = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-gray-50 dark:bg-blue-600 dark:text-gray-50">
            Our Values
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            <div className="flex items-start gap-4">
              <GitCompareArrowsIcon className="w-8 h-8 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maiores totam id vitae laborum eveniet voluptatum distinctio
                  voluptatem dolorem soluta, fuga error accusamus fugit quidem?
                  Accusamus et at excepturi praesentium magnam.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Landmark className="w-8 h-8 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Stability</h3>
                <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus suscipit maiores ut, culpa, voluptatibus similique
                  possimus dolor non repudiandae necessitatibus eaque quidem a
                  quis. Magni nisi laudantium quod quibusdam corporis!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MergeIcon className="w-8 h-8 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus velit quasi necessitatibus nihil deserunt modi
                  reiciendis delectus, exercitationem corrupti quibusdam facilis
                  repudiandae vel illo quo dolorum. Placeat laborum autem sunt?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Activity className="w-8 h-8 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Foresee</h3>
                <p className="text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus velit quasi necessitatibus nihil deserunt modi
                  reiciendis delectus, exercitationem corrupti quibusdam facilis
                  repudiandae vel illo quo dolorum. Placeat laborum autem sunt?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

function AccessibilityIcon(props) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
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

function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
