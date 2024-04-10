"use client";

import React from "react";

import { changeValueOfObj } from "@/app/_actions";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const EditComp = ({ data, className }) => {
  const contentEditableRef = useRef(null);

  const handleValueChange = async (e) => {
    const res = await changeValueOfObj(data?.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  };

  useEffect(() => {
    if (contentEditableRef.current.innerText !== data?.title) {
      contentEditableRef.current.innerText = data?.title;
    }
  });

  return (
    <span
      contentEditable="true"
      ref={contentEditableRef}
      onBlur={(event) => {
        handleValueChange(event.target.innerText);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          console.log(event);
        }
      }}
      className={cn(
        // "border border-dashed border-gray-500  rounded-lg ",
        "rounded-lg ",
        data?.className,
        className
      )}
    />
  );
};

export default EditComp;
