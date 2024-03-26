import React from "react";
import EditComp from "./edit-comp";

const EditableComp = ({ isEditable, comp }) => {
  return (
    <>
      {isEditable ? (
        <EditComp data={comp} />
      ) : comp ? (
        <comp.type className={comp.className}>{comp.title}</comp.type>
      ) : null}
    </>
  );
};

export default EditableComp;
