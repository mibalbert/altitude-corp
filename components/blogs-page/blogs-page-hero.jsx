import React from "react";

const BlogsPageHero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-850">
      <div className="py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Welcome to Our Blog
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover a world of baking delights, culinary adventures, and
              more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPageHero;
