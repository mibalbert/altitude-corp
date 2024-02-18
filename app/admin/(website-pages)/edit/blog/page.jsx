/**
 * admin/(website-pages)/edit/blog/page.jsx
 */

import React from "react";

const EditBlog = async () => {
  const data = await prisma.blogPage.findMany({
    // include: {
    //   reviews: true,
    // },
  });

  return (
    <div className="p-4 pb-44 ">
      <div className="px-5 pb-5 border-2 border-dashed border-gray-300 rounded-xl">
        <div>EditBlog</div>
      </div>
    </div>
  );
};

export default EditBlog;
