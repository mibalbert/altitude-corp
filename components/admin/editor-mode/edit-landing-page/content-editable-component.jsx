/**
 * components/admin/edit-landing-page/content-editable-components.jsx
 */

"use client";

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
      // className="border border-dashed  rounded-lg line-clamp-3"
      className="border border-dashed  rounded-lg "
    />
  );
}
