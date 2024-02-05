/**
 * components/CreatePostForm.jsx
 */

"use client";

import React, { useState } from "react";

import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => {
    return import("../components/CustomEditor");
  },
  { ssr: false }
);

const CreatePostForm = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data.status);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="pt-12 space-y-10">
        <div className="text-2xl">Create a new Post</div>

        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button type="submit" disabled={!file || uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
        <div className="">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Content
          </label>

          <CustomEditor initialData="<h1>Hello from CKEditor in Next.js!</h1>" />
        </div>
        <div className="relative h-full w-full"></div>
      </div>
    </div>
  );
};

export default CreatePostForm;
