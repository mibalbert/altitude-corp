/**
 * admin/layout.jsx
 */

import React from "react";
import { SearchCommand } from "@/components/admin/modals-and-commands/search-command";
import AdminSideNav from "@/components/admin/admin-sidenav/admin-sidenav";
import { Navigation } from "@/components/admin/admin-sidenav/navigation";

const layout = async ({ children }) => {
  return (
    <>
      <div className="h-full max-w-[1600px]  w-full mx-auto flex dark:bg-[#1F1F1F]">
        <Navigation />
        {/* <AdminSideNav /> */}
        <main className="flex-1 h-full overflow-y-auto">
          <SearchCommand />
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
