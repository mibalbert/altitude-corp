/**
 * components/faq/faq-main.jsx
 */

// import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

const FAQMain = ({data}) => {
  
  return (
    <section className="w-full py-12 md:py-24 ">
      <div className="container px-4 md:px-6 space-y-20">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl   font-bold tracking-tighter sm:text-4xl md:text-5xl">
              FAQ
            </h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              {` Got a question? We've got answers. If you have some other
              questions, feel free to send us an email to  `}
              <Link className="underline" href="#">
                hello@example.com
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl grid gap-4 md:gap-8 lg:max-w-5xl">
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <p className="py-4">Lorem ipsum dolor sit amet?</p>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <p className="py-4">Lorem ipsum dolor sit amet?</p>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <p className="py-4">Lorem ipsum dolor sit amet?</p>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="grid items-center grid-cols-2 px-4 cursor-pointer">
              <p className="py-4">Lorem ipsum dolor sit amet?</p>
              {/* <ChevronDownIcon className="h-6 w-6 justify-self-end" /> */}
            </div>
            <div className="border-t px-4">
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQMain;
