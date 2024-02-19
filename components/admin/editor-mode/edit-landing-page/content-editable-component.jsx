/**
 * components/admin/edit-landing-page/content-editable-components.jsx
 */

"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function Contenteditable(props) {
  const contentEditableRef = useRef(null);

  useEffect(() => {
    if (contentEditableRef.current.textContent !== props.value) {
      contentEditableRef.current.textContent = props.value;
    }
  });

  return (
    <div
      contentEditable="true"
      ref={contentEditableRef}
      onInput={(event) => {
        props.onChange(event.target.textContent);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          console.log(event);
        }
      }}
      className={cn(
        "border border-dashed border-gray-500  rounded-lg",
        props.className
      )}
    />
  );
}
