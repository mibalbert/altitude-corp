/**
 * components/admin/live-post/live-title.jsx
 */

import React from "react";

const LiveTitle = ({ title }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 text-center">
      <h1 className="text-5xl font-bold">{title}</h1>
    </div>
  );
};

export default LiveTitle;
