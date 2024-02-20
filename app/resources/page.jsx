/**
 * resources/page.jsx
 */

import ResourceCard from "@/components/resources/resource-card";
const resources = [
  {
    title: "The Alchemist",
    date: "Feb 10, 2024",
    image: "/placeholder.svg",
    buttonText: "Download",
    buttonColor: "bg-blue-500",
    buttonTextColor: "text-white",
  },
  {
    title: "To Kill a Mockingbird",
    date: "Jan 15, 2024",
    image: "/placeholder.svg",
    buttonText: "Download",
    buttonColor: "bg-blue-500",
    buttonTextColor: "text-white",
  },
  {
    title: "The Great Gatsby",
    date: "Mar 5, 2024",
    image: "/placeholder.svg",
    buttonText: "Download",
    buttonColor: "bg-blue-500",
    buttonTextColor: "text-white",
  },
  {
    title: "1984",
    date: "Apr 20, 2024",
    image: "/placeholder.svg",
    buttonText: "Download",
    buttonColor: "bg-blue-500",
    buttonTextColor: "text-white",
  },
  {
    title: "Pride and Prejudice",
    date: "May 8, 2024",
    image: "/placeholder.svg",
    buttonText: "Download",
    buttonColor: "bg-blue-500",
    buttonTextColor: "text-white",
  },
];

export const metadata = {
  title: "ALTITUDE CORP | Resouces",
  description: "Best company to help you grow",
};

const Resources = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      {/* <div>Resources</div>
      <div>
        Introductory Guides: Offer downloadable content like eBooks or guides
        relevant to your services.
      </div>
      <div></div> */}
      <div className="container grid gap-4 items-center justify-center px-4 text-center md:gap-24 md:px-6 ">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Resources
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Introductory Guides. We offer downloadable content like eBooks or
            guides relevant to your services.
          </p>
        </div>
        <div className="grid w-full min-[300px] gap-4 items-center justify-center md:gap-8 lg:gap-12">
          {resources.map((el, idx) => {
            return (
              <ResourceCard
                key={idx}
                title={el.title}
                date={el.date}
                image={el.image}
                buttonText={"Download"}
                buttonColor={el.buttonColor}
                buttonTextColor={el.buttonTextColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
