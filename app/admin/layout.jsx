import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div></div>
      <div className="w-full max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default layout;
