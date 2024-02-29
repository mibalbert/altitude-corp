/**
 * components/admin/blog-post/editor.jsx
 */

"use client";

import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { savePostContentChange, savePostCoverImageUrl } from "@/app/_actions";
import { cn } from "@/lib/utils";
import { Check, Timer } from "lucide-react";
import { useSavingStatus } from "@/hooks/use-admin-saving-status";

const Editor = ({ postId, initialContent }) => {
  const setIsSaved = useSavingStatus((state) => state.setIsSaved);

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const saveInput = debounce(async (data) => {
    const stringifiedData = JSON.stringify(data);

    setIsSaved(false);
    const res = await savePostContentChange(postId, stringifiedData);
    console.log(res);
    if (res.ok) {
      console.log(res.ok);
    }
    setIsSaved(true); // Move this line here
  });

  const onEditorContentChange = (editor) => {
    saveInput(editor.topLevelBlocks);
  };

  const handleUpload = async (file) => {
    // setIsUploading(true);
    var data = new FormData();
    data.append("file", file);
    data.append("folderName", "blog");

    const res = await fetch("/api/s3-upload", {
      method: "POST",
      body: data,
    });

    const response = await res.json();

    return response.url;
  };

  const editor = useBlockNote({
    editable: true,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange: onEditorContentChange,
    uploadFile: handleUpload,
  });

  return (
    <BlockNoteView
      editor={editor}
      theme={"light"}
      className="border border-dashed rounded-xl transform transition-all duration-100 border-gray-300 py-5 hover:outline-none  hover:border-solid hover:border-gray-500 hover:ring-gray-500 hover:ring-1 "
    />
  );
};

export default Editor;
