/**
 * main-side-nav.jsx
 */

import React from "react";
import { Navigation } from "./navigation";
import FoldersAndFiles from "./folders-and-files-list";

const MainSideNav = () => {
  return (
    <>
      <Navigation>
        <FoldersAndFiles />
      </Navigation>
    </>
  );
};

export default MainSideNav;
