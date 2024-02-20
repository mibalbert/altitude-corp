/**
 * comoponents/footer.jsx
 */

"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (
    (pathname.includes("/admin") && !pathname.includes("/admin/preview")) ||
    pathname.includes("/sign-in")
  ) {
    return <></>;
  }

  return (
    <footer
      className={cn("bg-white", {
        "bg-blue-600 text-gray-100": pathname.includes("/contact-us"),
      })}
    >
      <div className="py-10">
        <div className="sun"></div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong
            className={cn(
              "block text-center text-xl font-bold text-gray-900 sm:text-3xl",
              { " text-gray-100": pathname.includes("/contact-us") }
            )}
          >
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" for="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <h1 className="text-3xl font-bold">ALTITUDE CORP</h1>
            <p
              className={cn(
                "mt-4 text-center text-gray-500 lg:text-left lg:text-lg",
                { " text-gray-100": pathname.includes("/contact-us") }
              )}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className={cn(
                  "text-gray-700 transition hover:text-gray-700/75",
                  {
                    " text-gray-100  hover:text-gray-100/70":
                      pathname.includes("/contact-us"),
                  }
                )}
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                className={cn(
                  "text-gray-700 transition hover:text-gray-700/75",
                  {
                    " text-gray-100  hover:text-gray-100/70":
                      pathname.includes("/contact-us"),
                  }
                )}
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                className={cn(
                  "text-gray-700 transition hover:text-gray-700/75",
                  {
                    " text-gray-100  hover:text-gray-100/70":
                      pathname.includes("/contact-us"),
                  }
                )}
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a
                className={cn(
                  "text-gray-700 transition hover:text-gray-700/75",
                  {
                    " text-gray-100  hover:text-gray-100/70":
                      pathname.includes("/contact-us"),
                  }
                )}
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    {" "}
                    Revenue Checker{" "}
                  </a>
                </li>

                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    Data modeling
                  </a>
                </li>

                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    Research
                  </a>
                </li>

                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    Industry standards
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    {" "}
                    Our Team{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a
                    className={cn(
                      "text-gray-700 transition hover:text-gray-700/75",
                      {
                        " text-gray-100  hover:text-gray-100/70":
                          pathname.includes("/contact-us"),
                      }
                    )}
                    href="#"
                  >
                    {" "}
                    Live Chat{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Company 2024. All rights reserved.
            <br />
            <a
              href="#"
              className={cn("text-gray-700 transition hover:text-gray-700/75", {
                " text-gray-100  hover:text-gray-100/70":
                  pathname.includes("/contact-us"),
              })}
            ></a>
            <a
              href="#"
              className={cn("text-gray-700 transition hover:text-gray-700/75", {
                " text-gray-100  hover:text-gray-100/70":
                  pathname.includes("/contact-us"),
              })}
            >
              ALTITUDE CORP
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
// /**
//  * comoponents/footer.jsx
//  */

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Footer() {
//   const pathname = usePathname();

//   if (
//     (pathname.includes("/admin") && !pathname.includes("/admin/preview")) ||
//     pathname.includes("/sign-in")
//   ) {
//     return <></>;
//   }

//   return (
//     <footer classNameName="pb-16 text-white bg-blue-600 overflow-hidden p-20">
//       {/* <div classNameName="mx-auto w-full max-w-screen-2xl  py-16  lg:px-12 sm:px-6 px-4"> */}
//       <div classNameName="grid grid-cols-3  w-full md:gap-8 gap-4  mx-auto">
//         <div classNameName="col-span-3 md:col-span-2 lg:col-span-1 flex flex-col flex-shrink-0 pr-10">
//           <div classNameName="dark:text-white text-4xl font-semibold">
//             Logo & Comp
//           </div>
//           <p classNameName="mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
//             dignissimos, eaque quibusdam omnis nobis consequatur eligendi,
//           </p>
//           <div classNameName="flex items-center gap-x-4 mt-12">
//             <button
//               aria-label="instagram"
//               classNameName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
//             >
//               <svg
//                 width="18"
//                 height="17"
//                 viewBox="0 0 18 17"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M9.00081 0.233398C6.68327 0.233398 6.39243 0.243215 5.48219 0.283343C4.57374 0.323644 3.95364 0.462973 3.41106 0.667403C2.84981 0.87855 2.37372 1.161 1.8994 1.62066C1.42473 2.08016 1.13317 2.54137 0.914502 3.08491C0.702944 3.61071 0.558942 4.2116 0.518053 5.09132C0.477342 5.97311 0.466675 6.25504 0.466675 8.50015C0.466675 10.7453 0.476986 11.0262 0.518231 11.9079C0.560009 12.788 0.703833 13.3887 0.914679 13.9144C1.13282 14.4581 1.42437 14.9193 1.89887 15.3788C2.37301 15.8386 2.8491 16.1218 3.40999 16.3329C3.95293 16.5373 4.57321 16.6767 5.48148 16.717C6.39171 16.7571 6.68238 16.7669 8.99974 16.7669C11.3175 16.7669 11.6074 16.7571 12.5176 16.717C13.4261 16.6767 14.0469 16.5373 14.5898 16.3329C15.1509 16.1218 15.6263 15.8386 16.1004 15.3788C16.5751 14.9193 16.8667 14.4581 17.0853 13.9145C17.2951 13.3887 17.4391 12.7878 17.4818 11.9081C17.5227 11.0263 17.5333 10.7453 17.5333 8.50015C17.5333 6.25504 17.5227 5.97328 17.4818 5.09149C17.4391 4.21143 17.2951 3.61071 17.0853 3.08508C16.8667 2.54137 16.5751 2.08016 16.1004 1.62066C15.6258 1.16082 15.1511 0.878377 14.5893 0.667403C14.0453 0.462973 13.4249 0.323644 12.5164 0.283343C11.6062 0.243215 11.3164 0.233398 8.99814 0.233398H9.00081ZM8.23525 1.72311C8.46245 1.72277 8.71597 1.72311 9.00077 1.72311C11.2792 1.72311 11.5492 1.73104 12.449 1.77065C13.281 1.8075 13.7326 1.94218 14.0334 2.05533C14.4316 2.20517 14.7155 2.38428 15.014 2.67362C15.3127 2.96295 15.4976 3.23851 15.6526 3.62429C15.7694 3.91535 15.9086 4.3528 15.9464 5.15881C15.9873 6.03026 15.9962 6.29204 15.9962 8.49823C15.9962 10.7044 15.9873 10.9662 15.9464 11.8377C15.9084 12.6437 15.7694 13.0811 15.6526 13.3722C15.4979 13.758 15.3127 14.0327 15.014 14.3218C14.7153 14.6112 14.4318 14.7903 14.0334 14.9401C13.7329 15.0538 13.281 15.1881 12.449 15.225C11.5494 15.2646 11.2792 15.2732 9.00077 15.2732C6.72217 15.2732 6.45212 15.2646 5.55256 15.225C4.72055 15.1878 4.26899 15.0531 3.96801 14.9399C3.56978 14.7901 3.28533 14.611 2.98666 14.3216C2.68799 14.0323 2.5031 13.7574 2.34808 13.3715C2.23128 13.0804 2.09208 12.643 2.05421 11.837C2.01332 10.9655 2.00514 10.7037 2.00514 8.49617C2.00514 6.2886 2.01332 6.0282 2.05421 5.15674C2.09226 4.35073 2.23128 3.91329 2.34808 3.62188C2.50275 3.2361 2.68799 2.96054 2.98666 2.67121C3.28533 2.38187 3.56978 2.20276 3.96801 2.05258C4.26881 1.93891 4.72055 1.80457 5.55256 1.76755C6.33977 1.7331 6.64484 1.72277 8.23525 1.72105V1.72311ZM13.5558 3.09574C12.9905 3.09574 12.5318 3.53956 12.5318 4.08741C12.5318 4.63508 12.9905 5.07942 13.5558 5.07942C14.1212 5.07942 14.5799 4.63508 14.5799 4.08741C14.5799 3.53974 14.1212 3.09574 13.5558 3.09574ZM9.00082 4.25481C6.58071 4.25481 4.61855 6.15564 4.61855 8.50013C4.61855 10.8446 6.58071 12.7446 9.00082 12.7446C11.4209 12.7446 13.3824 10.8446 13.3824 8.50013C13.3824 6.15564 11.4209 4.25481 9.00082 4.25481ZM9.00079 5.74454C10.5717 5.74454 11.8453 6.97818 11.8453 8.50013C11.8453 10.0219 10.5717 11.2557 9.00079 11.2557C7.42975 11.2557 6.15632 10.0219 6.15632 8.50013C6.15632 6.97818 7.42975 5.74454 9.00079 5.74454Z"
//                   fill="white"
//                 />
//               </svg>
//             </button>
//             <button
//               aria-label="linked-in"
//               classNameName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
//             >
//               <svg
//                 width="18"
//                 height="17"
//                 viewBox="0 0 18 17"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M17.5333 8.4886C17.5333 9.04766 17.4746 9.60594 17.3592 10.1501C17.2467 10.6814 17.08 11.203 16.8617 11.7016C16.6483 12.1914 16.3837 12.6634 16.0745 13.1035C15.77 13.5409 15.4191 13.9512 15.0337 14.3253C14.6474 14.6977 14.2224 15.0367 13.7711 15.333C13.3152 15.6304 12.8273 15.8864 12.3215 16.094C11.806 16.3044 11.2664 16.4657 10.7184 16.5745C10.1559 16.6866 9.57755 16.7438 8.99962 16.7438C8.42126 16.7438 7.8429 16.6866 7.28121 16.5745C6.73244 16.4657 6.19283 16.3044 5.67779 16.094C5.17195 15.8864 4.68357 15.6304 4.22772 15.333C3.77645 15.0367 3.35143 14.6977 2.96599 14.3253C2.58015 13.9512 2.22928 13.5409 1.92427 13.1035C1.61675 12.6634 1.35172 12.1913 1.13755 11.7016C0.919183 11.203 0.752114 10.6814 0.639188 10.1501C0.525025 9.60594 0.466675 9.04766 0.466675 8.4886C0.466675 7.92913 0.524992 7.36965 0.639221 6.82665C0.752147 6.29538 0.919216 5.77299 1.13759 5.27519C1.35175 4.78505 1.61678 4.31265 1.9243 3.87246C2.22931 3.43473 2.58018 3.02517 2.96602 2.65069C3.35146 2.27823 3.77648 1.94007 4.22775 1.64421C4.6836 1.3455 5.17198 1.08958 5.67783 0.881567C6.19286 0.670713 6.73244 0.509099 7.28124 0.401087C7.84294 0.289844 8.4213 0.233398 8.99966 0.233398C9.57758 0.233398 10.1559 0.289844 10.7185 0.401087C11.2664 0.509131 11.806 0.670745 12.3215 0.881567C12.8273 1.08955 13.3153 1.3455 13.7711 1.64421C14.2224 1.94007 14.6475 2.27823 15.0337 2.65069C15.4191 3.02517 15.77 3.43473 16.0746 3.87246C16.3837 4.31265 16.6483 4.78508 16.8617 5.27519C17.08 5.77299 17.2467 6.29538 17.3592 6.82665C17.4746 7.36965 17.5333 7.92913 17.5333 8.4886ZM5.89026 2.11217C3.85805 3.0405 2.34131 4.85195 1.86836 7.03507C2.06048 7.03668 5.0973 7.07377 8.59622 6.17446C7.33492 4.00666 5.98735 2.23757 5.89026 2.11217ZM9.2 7.26001C5.44774 8.34669 1.84711 8.2685 1.71795 8.26369C1.71585 8.33945 1.71211 8.4128 1.71211 8.4886C1.71211 10.2996 2.41839 11.9507 3.57929 13.1991C3.57678 13.1954 5.57108 9.77282 9.50377 8.54262C9.59876 8.51199 9.69546 8.48456 9.79128 8.45797C9.60838 8.05732 9.40875 7.65584 9.2 7.26001ZM13.8124 3.1977C12.5293 2.10329 10.8447 1.43946 8.9996 1.43946C8.40748 1.43946 7.83286 1.50879 7.28242 1.63697C7.39157 1.77887 8.76042 3.53549 10.0067 5.74921C12.7565 4.75199 13.7944 3.22348 13.8124 3.1977ZM10.288 9.6261C10.2718 9.63131 10.2556 9.6358 10.2397 9.64142C5.93997 11.0914 4.53583 14.0136 4.52064 14.0455C5.75781 14.9762 7.30956 15.5377 8.99965 15.5377C10.0088 15.5377 10.9701 15.339 11.8448 14.9791C11.7368 14.3632 11.3135 12.2042 10.288 9.6261ZM13.0719 14.3349C14.7082 13.2668 15.8703 11.5706 16.1945 9.60591C16.0445 9.55916 14.0057 8.93477 11.6535 9.29958C12.6093 11.8407 12.9977 13.9101 13.0719 14.3349ZM10.5676 6.79966C10.7368 7.13585 10.9006 7.47801 11.0518 7.82188C11.1056 7.94524 11.1581 8.06618 11.2093 8.18708C13.7128 7.88233 16.1792 8.39506 16.2846 8.41599C16.2679 6.74483 15.65 5.21108 14.6275 4.01032C14.6137 4.02922 13.4449 5.66294 10.5676 6.79966Z"
//                   fill="white"
//                 />
//               </svg>
//             </button>
//             <button
//               aria-label="twitter"
//               classNameName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
//             >
//               <svg
//                 width="16"
//                 height="13"
//                 viewBox="0 0 16 13"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M7.5208 3.59864L7.55438 4.13498L6.99479 4.0693C4.95791 3.81755 3.17843 2.9638 1.66756 1.52992L0.928908 0.818458L0.73865 1.34385C0.33575 2.51503 0.593158 3.75188 1.43253 4.58375C1.8802 5.04346 1.77948 5.10914 1.00725 4.8355C0.73865 4.74793 0.503625 4.68226 0.481242 4.71509C0.4029 4.79171 0.6715 5.78776 0.884142 6.18181C1.17513 6.72909 1.76828 7.26542 2.4174 7.58284L2.96579 7.83459L2.31668 7.84554C1.68994 7.84554 1.66756 7.85648 1.73471 8.08634C1.95854 8.79781 2.84268 9.55305 3.82755 9.88142L4.52143 10.1113L3.91708 10.4615C3.02175 10.965 1.96973 11.2496 0.917717 11.2715C0.414092 11.2825 0 11.3262 0 11.3591C0 11.4685 1.36538 12.0815 2.15999 12.3223C4.54382 13.0338 7.37531 12.7273 9.50173 11.5123C11.0126 10.6476 12.5235 8.92915 13.2286 7.26542C13.6091 6.37883 13.9896 4.75888 13.9896 3.98174C13.9896 3.47824 14.0232 3.41257 14.6499 2.81056C15.0192 2.4603 15.3662 2.0772 15.4333 1.96775C15.5452 1.75978 15.534 1.75978 14.9633 1.94586C14.012 2.27422 13.8777 2.23044 14.3477 1.73789C14.6947 1.38763 15.1088 0.752784 15.1088 0.566709C15.1088 0.533872 14.9409 0.5886 14.7506 0.68711C14.5492 0.796566 14.1015 0.96075 13.7658 1.05926L13.1614 1.24534L12.613 0.884131C12.3108 0.68711 11.8856 0.468198 11.6617 0.402524C11.0909 0.249286 10.218 0.271177 9.70318 0.446307C8.30422 0.938859 7.42008 2.20855 7.5208 3.59864Z"
//                   fill="white"
//                 />
//               </svg>
//             </button>
//             <button
//               aria-label="youtube"
//               classNameName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center"
//             >
//               <svg
//                 width="18"
//                 height="13"
//                 viewBox="0 0 18 13"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M15.6677 1.17143C16.4021 1.36664 16.9804 1.94183 17.1767 2.67227C17.5333 3.99611 17.5333 6.75832 17.5333 6.75832C17.5333 6.75832 17.5333 9.52043 17.1767 10.8444C16.9804 11.5748 16.4021 12.15 15.6677 12.3453C14.3369 12.7 9.00001 12.7 9.00001 12.7C9.00001 12.7 3.66309 12.7 2.33218 12.3453C1.59783 12.15 1.0195 11.5748 0.823232 10.8444C0.466675 9.52043 0.466675 6.75832 0.466675 6.75832C0.466675 6.75832 0.466675 3.99611 0.823232 2.67227C1.0195 1.94183 1.59783 1.36664 2.33218 1.17143C3.66309 0.81665 9.00001 0.81665 9.00001 0.81665C9.00001 0.81665 14.3369 0.81665 15.6677 1.17143ZM7.40002 4.43326V9.59993L11.6667 7.01669L7.40002 4.43326Z"
//                   fill="white"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div classNameName="col-span-3 md:col-span-2 lg:col-span-1 sm:ml-0 ml-8 flex gap-8  lg:gap-14 xl:gap-20">
//           <div classNameName="">
//             <h2 classNameName="text-2xl font-semibold leading-4  dark:text-white">
//               Company
//             </h2>
//             <div classNameName="flex flex-col">
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 Pricing
//               </Link>
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 About Us
//               </Link>
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 Contact us
//               </Link>
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 Testimonials
//               </Link>
//             </div>
//           </div>
//           <div>
//             <h2 classNameName="text-2xl font-semibold leading-4  dark:text-white">
//               Support
//             </h2>
//             <div classNameName="flex flex-col">
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 Legal policy
//               </Link>
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 Status policy
//               </Link>
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 Privacy policy
//               </Link>
//               <Link
//                 href=""
//                 classNameName="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6  dark:text-white cursor-pointer"
//               >
//                 Terms of service
//               </Link>
//             </div>
//           </div>
//           <div classNameName="col-span-3 md:col-span-2 lg:col-span-1 mt-10 lg:block hidden">
//             <label classNameName="text-xl font-medium leading-5  dark:text-white">
//               Get updates
//             </label>
//             <div classNameName="cursor-pointer flex items-center justify-between border border-gray-800 dark:border-white mt-4">
//               <input
//                 type="text"
//                 classNameName="text-base leading-4 p-4 w-full focus:outline-none  dark:text-white dark:placeholder-white dark:bg-gray-900 dark:border-white placeholder-gray-800"
//                 placeholder="Enter your email"
//               />
//               <button
//                 aria-label="send"
//                 classNameName="mr-4 fill-current  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               >
//                 <svg
//                   classNameName="dark:text-white dark:hover:text-gray-200"
//                   width="16"
//                   height="17"
//                   viewBox="0 0 16 17"
//                   fill="currentColor"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div classNameName="mt-10 lg:hidden">
//           <label classNameName="text-xl font-medium leading-5  dark:text-white">
//             Get updates
//           </label>
//           <div classNameName="flex items-center justify-between border border-gray-800 dark:border-white mt-4">
//             <input
//               type="text"
//               classNameName="text-base leading-4 p-4 relative z-0 w-full focus:outline-none  placeholder-gray-800 dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900"
//               placeholder="Enter your email"
//             />
//             <button
//               aria-label="send"
//               classNameName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer mr-4 relative z-40"
//             >
//               <svg
//                 classNameName="fill-current  hover:text-gray-500 dark:text-white dark:hover:text-gray-200"
//                 width="16"
//                 height="17"
//                 viewBox="0 0 16 17"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* <div classNameName="text-center pt-20">akljsdnkajsdnjasnd</div> */}
//       <div classNameName="pt-14">
//         <p classNameName="text-sm leading-none mt-4 text-center dark:text-white">
//           Copyright © 2024 Company / All rights reserved
//         </p>
//       </div>
//     </footer>
//   );
// }
