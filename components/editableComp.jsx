import React from "react";
import EditComp from "./edit-comp";
import { cn } from "@/lib/utils";

const EditableComp = ({ isEditable, comp , className}) => {
  return (
    <>
      {isEditable ? (
        <EditComp data={comp} className={className}/>
      ) : comp ? (
        <comp.type className={cn(comp.className, className)}>{comp.title}</comp.type>
      ) : null}
    </>
  );
};

export default EditableComp;
