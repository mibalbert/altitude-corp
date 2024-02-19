/**
 * components/admin/editor-mode/edit-blog-page/blogs-page/saving-status.jsx
 */

"use client";

import { useIsSavingPagesEdit } from "@/hooks/use-is-saving-pages-edit";
import React from "react";

const SavingState = () => {
  const { isSaving } = useIsSavingPagesEdit();

  return <div>{isSaving ? "...saving" : "saved"}</div>;
};

export default SavingState;
