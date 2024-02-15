/**
 * components/admin-blog-post/post-editor.jsx
 */

"use client";

import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const PostEditor = () => {
  const editor = useBlockNote({});

  return <BlockNoteView editor={editor} />;
};

export default PostEditor;
