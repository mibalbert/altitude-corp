"use client";

import { useEffect, useRef } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const LiveEditor = ({ content }) => {
  const editor = useBlockNote({
    editable: false,
    initialContent: content ? JSON.parse(content) : undefined,
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <BlockNoteView editor={editor} theme={"light"} />
    </div>
  );
};

export default LiveEditor;
