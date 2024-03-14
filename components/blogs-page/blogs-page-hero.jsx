/**
 * blogs-page-hero.jsx
 */

import React from "react";
import ContentEditable from "../editor/content-editable";

const BlogsPageHero = ({ data, editable }) => {
  return (
    <section className=" text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-2">
          {!editable ? (
            <span className="text-4xl font-bold tracking-tighter font-serif text-center p-0 m-0 sm:text-5xl md:text-5xl lg:text-6xl bg-transparent ">
              {data?.find((el) => el.name === "hero-title").value}
            </span>
          ) : (
            <ContentEditable
              data={data?.find((el) => el.name === "hero-title")}
            />
          )}
          <pre className="mx-auto max-w-[700px] text-gray-200 md:text-xl ">
            {data?.blogPageSubtitle}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default BlogsPageHero;
