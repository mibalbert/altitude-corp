/**
 * admin/layout.jsx
 */

import React from "react";
import { SearchCommand } from "@/components/admin/modals-and-commands/search-command";
import { Navigation } from "@/components/admin/admin-sidenav/navigation";
import MainSideNav from "@/components/admin/admin-sidenav/main-side-nav";

const layout = async ({ children }) => {
  return (
    <>
      <div className="h-full  max-w-[1600px] mx-auto  w-full px-5 flex dark:bg-[#1F1F1F]">
        <Navigation />
        {/* <MainSideNav /> */}
        <main className="flex-1 h-full overflow-y-auto">
          <SearchCommand />
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
