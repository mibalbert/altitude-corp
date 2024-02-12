/**
 * components/contact-us/contact-us-services.jsx
 */

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactUsServices = () => {
  return (
    <section className="w-full py-12 md:py-24 space-y-20 pb-52 ">
      <div className="container grid items-center  gap-4 px-4  md:px-6 lg:gap-10">
        <div className="space-y-2 text-center ">
          <h2 className="text-3xl font-bold text-blue-600 tracking-tighter sm:text-4xl md:text-5xl">
            {`Let's Build Something Amazing Together`}
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We are committed to providing our clients with the highest level of
            service and expertise. If you have a project in mind, we would love
            to hear from you.
          </p>
        </div>

        <hr></hr>

        <div className="flex flex-col justify-center space-y-4 max-w-2xl w-full mx-auto pb-52">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none">
              Get in Touch
            </h1>
            <p className="  text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
              {`We're here to help! Fill out the form below and we'll get back to
            you as soon as possible.`}
            </p>
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
