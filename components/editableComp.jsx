import React from "react";

const EditableComp = ({ isEditable, comp }) => {
  return (
    <>
      {isEditable ? (
        <span>{comp.title}</span>
      ) : comp ? (
        <comp.type className={comp.className}>{comp.title}</comp.type>
      ) : null}
    </>
  );
};

export default EditableComp;
