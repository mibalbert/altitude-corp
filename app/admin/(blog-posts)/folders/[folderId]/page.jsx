import React from "react";

const Folder = ({ params }) => {
  return (
    <div>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};

export default Folder;
