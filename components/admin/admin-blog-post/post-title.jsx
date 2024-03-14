/**
 * components/admin/admin-blog-post/post-title.jsx
 */

"use client";

import { savePostTitleChange } from "@/app/_actions";
import { useSavingStatus } from "@/hooks/use-admin-saving-status";
import React, { useEffect, useState } from "react";
import Contenteditable from "../../editor/content-editable";
import { debounce } from "lodash";

const PostTitle = ({ postId, initialTitle }) => {
  const [text, setText] = useState(initialTitle || "");

  const setIsSaved = useSavingStatus((state) => state.setIsSaved);

  const saveInput = async () => {
    setIsSaved(false);

    const res = await savePostTitleChange(postId, text);
    console.log(res);
    if (res.ok) {
      console.log(res.ok);
    }
    setIsSaved(true);
  };

  // Added debounce function to wrap saveInput and debounce its execution
  const debounceSaveInput = debounce(saveInput, 400);

  const handleTitleChange = (e) => {
    setText(e);
  };

  // Trigger saveInput function when text changes, but debounce its execution
  useEffect(() => {
    debounceSaveInput();
    // Clear the debounce function on cleanup to avoid memory leaks
    return () => {
      debounceSaveInput.cancel();
    };
  }, [text]);

  return (
    <div>
      <label htmlFor="title">Title</label>
      <Contenteditable
        value={text}
        onChange={handleTitleChange} // Corrected the event handler to properly update state
        className="border border-dashed rounded-xl transform transition-all duration-100 hover:outline-none hover:border-solid hover:border-gray-500 hover:ring-gray-500 hover:ring-1 font-bold text-center border-gray-300 text-5xl w-auto py-2 px-2"
      />
    </div>
  );
};

export default PostTitle;
