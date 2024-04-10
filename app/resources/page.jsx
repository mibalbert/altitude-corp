/**
 * resources/page.jsx
 */


import EditableResources from "@/components/resources/editable-resources";
import ResourcesHero from "@/components/resources/resources-hero";
import { authOptions } from "@/lib/auth-options";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "ALTITUDE CORP | Resouces",
  description: "Best company to help you grow",
};

const Resources = async ({ searchParams }) => {

  const session = await getServerSession(authOptions);
  const isEditable = session?.user.role === "ADMIN" && searchParams?.editorMode;

  const pageObj = await prisma.pageObject.findMany({
    where: {
      page: "resources",
    },
  });


  const heroData = pageObj?.filter(
    (el) => el.parentComp === "ResourcesHero"
  );

  const resources = await prisma.resource.findMany({
    orderBy: {
      position: "asc",
    },
  })

  return (
    <section className="w-full ">
      <ResourcesHero data={heroData} isEditable={isEditable} />
      {/* <div className="container grid gap-4 items-center justify-center px-4 text-center md:gap-24 md:px-6 "> */}
      <EditableResources data={resources} isEditable={isEditable} />
      {/* </div> */}
    </section>
  );
};

export default Resources;
