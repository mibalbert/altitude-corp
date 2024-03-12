/**
 * components/admin/edit-landing-page/content-editable-components.jsx
 */

"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function Contenteditable(props) {
  const contentEditableRef = useRef(null);

  useEffect(() => {
    if (contentEditableRef.current.innerText !== props.value) {
      contentEditableRef.current.innerText = props.value;
    }
  });

  return (
    <span
      contentEditable="true"
      ref={contentEditableRef}
      onBlur={(event) => {
        props.onChange(event.target.innerText);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          console.log(event);
        }
      }}
      className={cn(
        "border border-dashed border-gray-500  rounded-lg w-min h-min",
        props.className
      )}
    />
  );
}
