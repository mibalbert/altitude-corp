/**
 * components/contact-us/contact-us-services.jsx
 */

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

// const ContactUsServices = ({ data }) => {
const ContactUsServices = () => {
  return (
    <section className="w-full py-12  ">
      <div className="container grid grid-cols-1  lg:grid-cols-2  gap-16  md:gap-4 px-4  md:px-6 lg:gap-20">
        <div className=" col-span-1 space-y-5 ">
          <h2 className="text-3xl font-bold pb-10 text-blue-600 tracking-tighter sm:text-4xl md:text-5xl">
            {/* {data?.servicesPageContactUsTitle} */}
            Contact Us
          </h2>
          <p className="max-w-xl text-gray-500 md:text-xl/relaxed lg:text-md/relaxed xl:text-md/relaxed dark:text-gray-400">
            {/* {data?.servicesPageContactUsSubitle} */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            fuga est beatae porro magnam pariatur recusandae aliquam tempora
            inventore quibusdam harum, blanditiis quas!
          </p>
          <p className="max-w-xl text-gray-500 md:text-xl/relaxed lg:text-md/relaxed xl:text-md/relaxed dark:text-gray-400">
            {/* {data?.servicesPageContactUsSubitle} */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            fuga est beatae porro magnam pariatur recusandae aliquam tempora
            inventore quibusdam harum, blanditiis quas!
          </p>
        </div>

        <div className="col-span-1 flex flex-col justify-center space-y-4 max-w-2xl w-full md:px-5 mx-auto pb-32">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
              {/* {data?.servicesPageContactUsMinTitle} */}
              Lorem
            </h1>
            <div className="  text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              {/* {data?.servicesPageContactUsMinSubtitle} */}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium assu
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <Label className="text-base text-blue-600" htmlFor="first-name">
                First name
              </Label>
              <Input id="first-name" placeholder="Enter your first name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-base text-blue-600" htmlFor="last-name">
                Last name
              </Label>
              <Input id="last-name" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-base text-blue-600" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-base text-blue-600" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="min-h-[100px] max-h-[200px]"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              size="lg"
            >
              Submit
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsServices;
