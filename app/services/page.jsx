// <div>Services</div>
// <div>Detailed service description</div>
// <div>Our process</div>
// <div className="">
//   <div>Invitation for Custom Solutions:</div>
//   <div>
//     - Encourage visitor to contact me to discuss personalized service
//     options
//   </div>
// </div>
/**
 * services/page.jsx
 */

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ContactUsServices from "@/components/contact-us/contact-us-services";
import Steps from "@/components/services/steps";
import ServicesHero from "@/components/services/services-hero";

const Services = () => {
  return (
    <>
      
      <ServicesHero />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let Us Serve You
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team is ready to help you achieve your goals. We provide
              expert advice and professional services to take your business to
              the next level.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-3">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Image
                alt="Service 1"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="400"
              />
              <div className="space-y-2 mt-4">
                <h3 className="text-xl font-bold">Service One</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of service one. Description of service one.
                </p>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Image
                alt="Service 2"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="400"
              />
              <div className="space-y-2 mt-4">
                <h3 className="text-xl font-bold">Service Two</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of service two. Description of service two.
                </p>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Image
                alt="Service 3"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="250"
                src="/placeholder.svg"
                width="400"
              />
              <div className="space-y-2 mt-4">
                <h3 className="text-xl font-bold">Service Three</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of service three. Description of service three.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Steps />
      <ContactUsServices />
    </>
  );
};

export default Services;
