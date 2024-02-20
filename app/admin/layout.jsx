/**
 * admin/layout.jsx
 */

import React from "react";
import { SearchCommand } from "@/components/admin/modals-and-commands/search-command";
import { Navigation } from "@/components/admin/admin-sidenav/navigation";

const layout = async ({ children }) => {
  return (
    <>
      <div className="h-full   w-full md:px-10 flex dark:bg-[#1F1F1F]">
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
