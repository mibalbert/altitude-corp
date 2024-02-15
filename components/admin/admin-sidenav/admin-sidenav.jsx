import React from "react";
import { Navigation } from "./navigation";
// import FoldersAndFiles from "./folders-and-files-list";
import MainFolders from "./folders-and-files/main-folders";

const OP = () => {
  return (
    <Navigation>
      <MainFolders />
    </Navigation>
  );
};

export default OP;
