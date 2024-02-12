/**
 * components/services/steps.jsx
 */

const Steps = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 ">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-semibold text-gray-50 dark:bg-blue-500 dark:text-gray-50">
              Embrace the Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/normal">
              Enhancing User Experience Through Our Process
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"></p>
          </div>
          <section className="w-full py-12 md:py-24">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  Step 1
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Initial Consultation
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We start by understanding your vision and requirements to lay
                  the foundation for a successful project.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  Step 2
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Project Planning
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our experts meticulously plan every aspect of your project,
                  ensuring that we are aligned with your goals and objectives.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  Step 3
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Execution
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  With careful attention to detail, we bring your ideas to life,
                  leveraging the latest technologies and best practices.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  Step 4
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Quality Assurance
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We conduct rigorous testing and quality assurance processes to
                  ensure that your project meets the highest standards.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-gray-50 dark:bg-blue-400 dark:text-gray-900">
                  Step 5
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Delivery
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover how we deliver exceptional results by following a
                  structured and tailored approach. Our process is meticulously
                  crafted to be efficient, effective, and customized to meet the
                  distinct requirements of every project.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Steps;
