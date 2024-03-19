/**
 * components/admin/blog-post/editor.jsx
 */

"use client";

import { useState } from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { savePostContentChange } from "@/app/_actions";
import { useSavingStatus } from "@/hooks/use-admin-saving-status";
import { cn } from "@/lib/utils";

const PostEditor = ({ postId, initialContent, className }) => {
  const setIsSaved = useSavingStatus((state) => state.setIsSaved);
  const [editorContent, setEditorContent] = useState(
    initialContent ? JSON.parse(initialContent) : null
  );

  const saveInput = async (data) => {
    const stringifiedData = JSON.stringify(data);

    setIsSaved(false);
    await savePostContentChange(postId, stringifiedData);
    setIsSaved(true);
  };

  const debounce = (func, timeout = 700) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const saveInputDebounced = debounce(saveInput);

  const onEditorContentChange = (editor) => {
    console.log(JSON.stringify(editor.topLevelBlocks))
    setEditorContent(editor.topLevelBlocks);
    saveInputDebounced(editor.topLevelBlocks);
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
    initialContent: editorContent,
    onEditorContentChange: onEditorContentChange,
    uploadFile: handleUpload,
  });

  return (
    <BlockNoteView
      editor={editor}
      theme={"light"}
      className={cn(" ", className)}
      // className="border border-dashed rounded-xl transform transition-all duration-100 border-gray-300 py-5 hover:outline-none  hover:border-solid hover:border-gray-500 hover:ring-gray-500 hover:ring-1 "
    />
  );
};

export default PostEditor;
 