/**
 * testing/page.jsx
 */

import prisma from "@/lib/prismadb";
import { Folder } from "./folder";

const Testing = async ({ parentFolder = null, level = 0 }) => {
  const folders = await prisma.folder.findMany({
    where: { parentFolder },
    include: {
      posts: true,
    },
    orderBy: {
      title: "asc", // Sort folders by title in ascending order
    },
  });

  return (
    <div className="flex items-center justify-center w-60 h-full  ">
      <div>
        {folders.length === 0 ? (
          <p></p>
        ) : (
          folders.map((folder, idx) => (
            <div key={idx}>
              <Folder folder={folder} level={level} />
              <Testing parentFolder={folder.id} level={level + 1} />{" "}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Testing;
