"use client";

import React, { useRef, useState } from "react";

export default function NewContentEditable(props) {
  const contentEditableRef = useRef(null);
  const [html, setHtml] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const node = document.getSelection().anchorNode;
      const pNode = node.parentNode;

      let tag = pNode.nodeName.toUpperCase();
      // if (event.ctrlKey) {
      //   tag = prompt("Enter tag name", "div");
      // } else {
      switch (tag) {
        case "P":
          tag = "BR";
          break;
        case "DIV":
          tag = "p";
          break;
        case "SPAN":
          tag = "span";
          break;
        case "BR":
          tag = null;
          break;
        default:
          tag = "BR";
      }
      // }

      const el = document.createElement(tag);

      range.deleteContents();
      range.insertNode(el);

      if (tag === "BR") {
        range.setStartAfter(el);
        range.setEndAfter(el);
      } else {
        range.setStart(el, 0);
        range.setEnd(el, 0);
      }

      const ze = document.createTextNode("\u200B");
      range.insertNode(ze);
      range.setStartBefore(ze);
      range.setEndBefore(ze);

      selection.removeAllRanges();
      selection.addRange(range);

      event.stopPropagation();
    }
    // console.log(contentEditableRef.current.innerHTML);
    setHtml(contentEditableRef.current.innerHTML);
    // props.onChange(contentEditableRef.current.innerHTML);
  };

  return (
    <>
      <div
        id="editable"
        value={"asdasdasd"}
        contentEditable="true"
        ref={contentEditableRef}
        onKeyDown={handleKeyDown}
      ></div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      {/* </div */}
      {/* <div></div> */}
    </>
  );
}
