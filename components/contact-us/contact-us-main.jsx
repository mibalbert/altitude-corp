/**
 * components/contact-us/contact-us-main.jsx
 */
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const ContactUsMain = () => {
  return (
    <div className="relative w-full py-10 ">
      {/* <Image
        width={1000}
        height={1000}
        alt=""
        className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-180"
        src="/vault-assets/images/numbers/gradient.svg"
      />
      <Image
        width={1000}
        height={1000}
        alt=""
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2  "
        src="/vault-assets/images/numbers/gradient.svg"
      /> */}
      {/* <div class="w-400 h-400   absolute left-1/2 transform -translate-x-1/2  top-1/2 -translate-y-1/2">
  <div class="w-1/2 h-1/2 rounded-full filter blur-25 bg-gradient-to-b from-white to-transparent, bg-gradient-to-br from-purple-600 to-indigo-600"> </div>
</div> */}

      <div className="z-[99] container grid md:gap-8 lg:grid-cols-12 xl:gap-12">
        <div className="space-y-6 md:col-start-4 md:col-span-6 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6">
          <h1 className="text-center font-bold tracking-tighter text-2xl  text-white">
            Contact form
          </h1>
          <div className="grid gap-5">
            <div className="grid grid-cols-2 gap-10">
              <div className="grid gap-1.5">
                <label
                  className="block text-sm font-semibold peer-required::after peer-required:content-['
                *'] peer-required:pl-0.5 text-white transition-all"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-1.5">
                <label
                  className="block text-sm font-semibold peer-required::after peer-required:content-['
                *'] peer-required:pl-0.5 text-white transition-all"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="grid gap-1.5">
              <label
                className="block text-sm font-semibold peer-required::after peer-required:content-['
              *'] peer-required:pl-0.5 text-white transition-all"
                htmlFor="subject"
              >
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Enter the subject of your message"
                required
              />
            </div>
            <div className="grid gap-1.5">
              <label
                className="block text-sm font-semibold peer-required::after peer-required:content-['
              *'] peer-required:pl-0.5 text-white transition-all"
                htmlFor="message"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                required
              />
            </div>
            <Button size="lg" className="bg-blue-900 mt-6">
              Submit
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMain;
