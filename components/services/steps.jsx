/**
 * components/services/steps.jsx
 */

import "./steps.css";

const Steps = () => {
  return (
    <ul class="timeline">
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">You</span>
            {/* <span class="time-wrapper">
              <span class="time">2013 - present</span>
            </span> */}
          </div>
          <div class="desc">
            My current employment. Way better than the position before!
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Us</span>
            {/* <span class="time-wrapper">
              <span class="time">2011 - 2013</span>
            </span> */}
          </div>
          <div class="desc">
            {`My first employer. All the stuff I've learned and projects I've been
            working on.`}
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">You</span>
            {/* <span class="time-wrapper">
              <span class="time">2008 - 2011</span>
            </span> */}
          </div>
          <div class="desc">
            A description of all the lectures and courses I have taken and my
            final degree?
          </div>
        </div>
      </li>
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">Us</span>
            {/* <span class="time-wrapper">
              <span class="time">2008 - 2011</span>
            </span> */}
          </div>
          <div class="desc">
            A description of all the lectures and courses I have taken and my
            final degree?
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Steps;

// <section className="w-full py-12 md:py-24  ">
//   <div className="container px-4 md:px-6">
//     <div className="flex flex-col items-center justify-center space-y-4 ">
//       <div className="space-y-2 text-center">
//         <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-semibold text-gray-50 dark:bg-blue-500 dark:text-gray-50">
//           Embrace the Process
//         </div>
//         <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/normal">
//           Enhancing User Experience Through Our Process
//         </h2>
//         <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"></p>
//       </div>
//       <section className="w-full grid grid-cols-4 gap-10   py-12 md:py-24">
//         <div className="col-span-1 border-r-2 border-blue-400 boreder-rounde"></div>

//         <div className="flex flex-col gap-10 col-span-3 ">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
//               Step 1
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
//               Initial Consultation
//             </h2>
//             <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               We start by understanding your vision and requirements to lay
//               the foundation for a successful project.
//             </p>
//           </div>
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
//               Step 2
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
//               Project Planning
//             </h2>
//             <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Our experts meticulously plan every aspect of your project,
//               ensuring that we are aligned with your goals and objectives.
//             </p>
//           </div>
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
//               Step 3
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
//               Execution
//             </h2>
//             <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               With careful attention to detail, we bring your ideas to life,
//               leveraging the latest technologies and best practices.
//             </p>
//           </div>
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
//               Step 4
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
//               Quality Assurance
//             </h2>
//             <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               We conduct rigorous testing and quality assurance processes to
//               ensure that your project meets the highest standards.
//             </p>
//           </div>
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
//               Step 5
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
//               Delivery
//             </h2>
//             <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Discover how we deliver exceptional results by following a
//               structured and tailored approach. Our process is meticulously
//               crafted to be efficient, effective, and customized to meet the
//               distinct requirements of every project.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   </div>
// </section>
