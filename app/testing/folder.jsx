/**
 * testing/folder.jsx
 */

"use client"

import Link from "next/link";

import { useState } from "react";

export const Folder = ({ folder, level }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const sortedPosts = folder.posts?.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div
      className="flex flex-col"
      style={{ paddingLeft: `${level * 12 + 25}px` }}
    >
      <div className="flex items-center">
        <h3 onClick={toggleCollapse}>{folder.title}</h3>
        <button onClick={toggleCollapse}>{collapsed ? "+" : "-"}</button>
      </div>
      {!collapsed && (
        <div
          className="flex flex-col"
          style={{ paddingLeft: `${(level - 1) * 12 + 25}px` }}
        >
          {sortedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/admin/blog-posts/${folder.id}/${post.id}`}
              className="border px-3"
            >
              {post.title}
            </Link>
          ))}
          <form className="">
            <button type="submit" className="border rounded-md px-2">
              + Post
            </button>
          </form>
        </div>
      )}
      <form className="">
        <button type="submit" className="border rounded-md px-2">
          + Folder
        </button>
      </form>
    </div>
  );
};