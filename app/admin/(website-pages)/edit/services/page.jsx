/**
 * admin/(website-pages)/edit/services/page.jsx
 */

import ServicesHero from "@/components/admin/editor-mode/edit-services-page/services-hero";
import ServicesLetUsHelp from "@/components/admin/editor-mode/edit-services-page/services-let-us-help";
import Steps from "@/components/admin/editor-mode/edit-services-page/steps";
import ContactUsServices from "@/components/admin/editor-mode/edit-services-page/contact-us-services";
import prisma from "@/lib/prismadb";

const EditServices = async () => {
  const data = await prisma.servicesPage.findMany({});

  return (
    <div className="p-4 pb-44 ">
      <div className="px-5 pb-5  space-y-10 py-10 border-2 border-dashed border-gray-300 rounded-xl">
        <div className="w-full flex items-center justify-between h-20">
          <div>EditBlog</div>
        </div>
        <ServicesHero data={data[0]} />
        <ServicesLetUsHelp data={data[0]} />
        <Steps data={data[0]} />
        <ContactUsServices data={data[0]} />
      </div>
    </div>
  );
};

export default EditServices;
