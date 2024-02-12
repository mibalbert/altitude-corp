/**
 * admin/layout.jsx
 */

import prisma from "@/lib/prismadb";
import React from "react";
import { Navigation } from "@/components/admin/admin-sidenav/navigation";
import { SearchCommand } from "@/components/admin/modals-and-commands/search-command";

const layout = async ({ children }) => {
  const folders = await prisma.folder.findMany();

  return (
    <>
      <div className="h-full max-w-screen-2xl w-full mx-auto  flex dark:bg-[#1F1F1F]">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
          <SearchCommand />
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
