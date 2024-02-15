/**
 * compoents/admin-sidenav/folders-and-files/main-folders.jsx
 */

import prisma from "@/lib/prismadb";
import React from "react";
import FolderData from "./folder-data";

const MainFolders = async () => {
  const mainFolders = await prisma.folder.findMany({
    where: {
      parentFolder: null,
    },
  });

  return (
    <div>
      {mainFolders.length > 0 ? (
        mainFolders.map((el, idx) => {
          return <FolderData parentFolderId={el.id} title={el.title} key={idx} />;
        })
      ) : (
        <div>No Folders, Add one now!</div>
      )}
    </div>
  );
};

export default MainFolders;
// <pre>{JSON.stringify(el, null, 2)}</pre>
