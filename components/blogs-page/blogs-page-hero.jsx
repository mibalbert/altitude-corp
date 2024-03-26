/**
 * blogs-page-hero.jsx
 */

import React from "react";
import ContentEditable from "../editor/content-editable";
import EditComp from "../edit-comp";
import EditableComp from "../editableComp";

const BlogsPageHero = ({ data, isEditable }) => {
  const heroTitle = data.find((el) => el.compName === "hero-title");
  return (
    <section className=" text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-2">
          <EditableComp isEditable={isEditable} comp={heroTitle} />
        </div>
      </div>
    </section>
  );
};

export default BlogsPageHero;
