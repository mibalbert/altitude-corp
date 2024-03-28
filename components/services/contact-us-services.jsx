/**
 * components/contact-us/contact-us-services.jsx
 */

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import EditableComp from "../editableComp";

// const ContactUsServices = ({ data }) => {
const ContactUsServices = ({ data, isEditable }) => {
  const contactUsTitle = data.find(
    (el) => el.compName === "services-contact-title"
  );
  const contactUsSubtitle1 = data.find(
    (el) => el.compName === "services-contact-subtitle-1"
  );
  const contactUsSubtitle2 = data.find(
    (el) => el.compName === "services-contact-subtitle-2"
  );
  const contactUsFormTitle = data.find(
    (el) => el.compName === "services-contact-form-title"
  );
  const contactUsFormSubtitle = data.find(
    (el) => el.compName === "services-contact-form-subtitle"
  );

  return (
    <section className="relative w-full py-16  bg-blue-600 with-pattern">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-0  bg-blue-600 [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2  gap-16  md:gap-4 px-4  md:px-6 lg:gap-20">
        <div className=" col-span-1 space-y-5 flex flex-col ">
          <EditableComp comp={contactUsTitle} isEditable={isEditable} />
          <EditableComp comp={contactUsSubtitle1} isEditable={isEditable} />
          <EditableComp comp={contactUsSubtitle2} isEditable={isEditable} />

          {/* <h2 className="text-3xl font-bold  text-white tracking-tighter sm:text-4xl md:text-5xl"> */}
          {/* {data?.servicesPageContactUsTitle} */}
          {/* What are you waiting for? Contact Us */}
          {/* Contact Us
          </h2>
          <p className="max-w-xl text-white md:text-xl/relaxed lg:text-md/relaxed xl:text-md/relaxed "> */}
          {/* {data?.servicesPageContactUsSubitle} */}
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            fuga est beatae porro magnam pariatur recusandae aliquam tempora
            inventore quibusdam harum, blanditiis quas!
          </p> */}
          {/* <p className="max-w-xl text-white md:text-xl/relaxed lg:text-md/relaxed xl:text-md/relaxed "> */}
          {/* {data?.servicesPageContactUsSubitle} */}
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            fuga est beatae porro magnam pariatur recusandae aliquam tempora
            inventore quibusdam harum, blanditiis quas!
          </p> */}
        </div>

        <div className="col-span-1 flex flex-col justify-center space-y-4 max-w-2xl w-full md:px-5 mx-auto">
          <div className="space-y-2 flex flex-col">
            {/* <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/none"> */}
            {/* {data?.servicesPageContactUsMinTitle} */}
            {/* Contact Form
            </h1>
            <div className="  text-white md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed "> */}
            {/* {data?.servicesPageContactUsMinSubtitle} */}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium assu
            </div> */}

            <EditableComp comp={contactUsFormTitle} isEditable={isEditable} />
            <EditableComp
              comp={contactUsFormSubtitle}
              isEditable={isEditable}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <Label className="text-base text-white" htmlFor="first-name">
                First name
              </Label>
              <Input id="first-name" placeholder="Enter your first name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-base text-white" htmlFor="last-name">
                Last name
              </Label>
              <Input id="last-name" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-base text-white" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-base text-white" htmlFor="message">
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
              className="text-blue-600 bg-white hover:bg-gray-50"
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
