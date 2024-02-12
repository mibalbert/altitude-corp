/**
 * admin/documents/[documentId]/page.jsx
 */

import React from "react";
import dynamic from "next/dynamic";

const Doc = ({ params }) => {
  const Editor = dynamic(
    () => import("../../../../../components/admin/blog-post/editor"),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <div className="">{params.documentId}</div>
      <Editor />
    </div>
  );
};

export default Doc;
