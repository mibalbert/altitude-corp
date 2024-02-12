/**
 * components/contact-us/contact-us-inside-page.jsx
 */

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const ContactUsInsidePage = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">
                Contact Us
              </h2>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {`Our team is here to help. Fill out the form below and we'll get
                back to you as soon as possible.`}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
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
      </div>
    </section>
  );
};

export default ContactUsInsidePage;
