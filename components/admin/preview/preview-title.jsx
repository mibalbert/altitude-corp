/**
 * components/admin/preview/preview-title.jsx
 */

import React from "react";

const PreviewTitle = ({ title }) => {
  return (
    <div className="w-full max-w-5xl mx-auto pt-14  text-center">
      <h1 className="text-5xl font-bold">{title}</h1>
    </div>
  );
};

export default PreviewTitle;
