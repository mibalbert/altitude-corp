/**
 * components/admin/edit-landing-page/content-editable-components.jsx
 */

"use client";

import { changeValueOfObj } from "@/app/_actions";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function ContentEditable({ data }) {
  const contentEditableRef = useRef(null);

  const handleValueChange = async (e) => {
    const res = await changeValueOfObj(data?.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  };

  useEffect(() => {
    if (contentEditableRef.current.innerText !== data.value) {
      contentEditableRef.current.innerText = data.value;
    }
  });

  console.log(data.className);

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
        "border border-dashed border-gray-500  rounded-lg w-min h-min resize",
        data.className
      )}
    />
  );
}
