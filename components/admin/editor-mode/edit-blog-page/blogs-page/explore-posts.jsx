/**
 * components/blogs-page/a-lot-of-blog-posts.jsx
 */

"use client";

import {
  changeBlogPageExploreSubtitle,
  changeBlogPageExploreTitle,
} from "@/app/actions/edit-web-pages/edit-blogs-page/_blogs-actions";
import { debounce } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Contenteditable from "../../../../editor/content-editable";

const ALotOfBlogPosts = ({ data }) => {
  const [blogPageExploreTitle, setBlogPageExploreTitle] = useState(
    data?.blogPageExploreTitle || ""
  );
  const [blogPageExploreSubtitle, setBlogPageExploreSubtitle] = useState(
    data?.blogPageExploreSubtitle || ""
  );

  const debounceChangeBlogPageExploreTitle = debounce(async (e) => {
    const res = await changeBlogPageExploreTitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);
  const debounceChangeBlogPageExploreSubtitle = debounce(async (e) => {
    const res = await changeBlogPageExploreSubtitle(data.id, e);
    if (res.ok) {
      console.log(res.message);
    }
  }, 300);

  const handleBlogPageExploreTitleChange = (e) => {
    setBlogPageExploreTitle(e);
    debounceChangeBlogPageExploreTitle(e);
  };
  const handleBlogPageExploreSubtitleChange = (e) => {
    setBlogPageExploreSubtitle(e);
    debounceChangeBlogPageExploreSubtitle(e);
  };

  return (
    <section className="container px-4 md:px-6">
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16 xl:py-20">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">
              <Contenteditable
                value={blogPageExploreTitle}
                onChange={handleBlogPageExploreTitleChange}
              />
            </h1>
            <div className="text-gray-500 dark:text-gray-400">
              <Contenteditable
                value={blogPageExploreSubtitle}
                onChange={handleBlogPageExploreSubtitleChange}
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <Link className="group inline-block" href="#">
                <Image
                  alt="Thumbnail"
                  className="aspect-image object-cover group-hover:opacity-75 transition-all"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
                <h2 className="mt-2 text-2xl font-bold leading-7">
                  The Mystery of the Missing Socks
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Solved by a group of courageous kittens. Posted on September
                  10, 2023
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  The case of the missing socks has confounded humans for
                  centuries. Where do all the lost socks go? Do they vanish into
                  thin air? Are they stolen by mischievous gnomes? Or do they
                  simply run away to start a new life on a tropical island?
                </p>
              </Link>
            </div>
            <div>
              <Link className="group inline-block" href="#">
                <Image
                  alt="Thumbnail"
                  className="aspect-image object-cover group-hover:opacity-75 transition-all"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
                <h2 className="mt-2 text-2xl font-bold leading-7">
                  The Secret Life of Houseplants
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Revealed by a botanist with a hidden camera. Posted on
                  September 15, 2023
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {`Have you ever wondered what your houseplants get up to when
                you're not looking? Do they have wild parties? Do they gossip
                about you behind your back? Or do they simply stand around,
                soaking up the sun and minding their own business?`}
                </p>
              </Link>
            </div>
            <div>
              <Link className="group inline-block" href="#">
                <Image
                  alt="Thumbnail"
                  className="aspect-image object-cover group-hover:opacity-75 transition-all"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
                <h2 className="mt-2 text-2xl font-bold leading-7">
                  The Art of the Perfect Cup of Tea
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Explored by a tea enthusiast with a taste for adventure.
                  Posted on September 20, 2023
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Making the perfect cup of tea is an art form. It requires
                  patience, precision, and a deep understanding of the
                  subtleties of flavor. Every step of the process, from choosing
                  the right leaves to steeping them for exactly the right amount
                  of time, is crucial.
                </p>
              </Link>
            </div>
            <div>
              <Link className="group inline-block" href="#">
                <Image
                  alt="Thumbnail"
                  className="aspect-image object-cover group-hover:opacity-75 transition-all"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
                <h2 className="mt-2 text-2xl font-bold leading-7">
                  The Language of Birds: Deciphering Avian Chatter
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Translated by an ornithologist with a keen ear. Posted on
                  September 25, 2023
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Birds are the original tweeters. They fill the air with a
                  symphony of chirps, trills, and warbles, communicating with
                  each other across the treetops. But what are they saying? Are
                  they gossiping about the latest worm buffet? Exchanging tips
                  on building the perfect nest? Or composing love songs to woo a
                  feathered sweetheart?
                </p>
              </Link>
            </div>
            <div>
              <Link className="group inline-block" href="#">
                <Image
                  alt="Thumbnail"
                  className="aspect-image object-cover group-hover:opacity-75 transition-all"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
                <h2 className="mt-2 text-2xl font-bold leading-7">
                  The Island of the Dancing Goats
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Discovered by an intrepid explorer with a love of rhythm.
                  Posted on September 30, 2023
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Deep in the heart of the ocean, there lies a mysterious island
                  where the trees sway to an invisible beat, the flowers spin in
                  graceful pirouettes, and the rocks tap out a complex rhythm on
                  the sand. But the most astonishing sight of all is the
                  inhabitants of the island: a herd of goats who move with the
                  effortless grace of professional dancers.
                </p>
              </Link>
            </div>
            <div>
              <Link className="group inline-block" href="#">
                <Image
                  alt="Thumbnail"
                  className="aspect-image object-cover group-hover:opacity-75 transition-all"
                  height={400}
                  src="/placeholder.svg"
                  width={600}
                />
                <h2 className="mt-2 text-2xl font-bold leading-7">
                  The Enigma of the Vanishing Waterfall
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Investigated by a team of intrepid geologists. Posted on
                  October 5, 2023
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  The waterfall was a beloved landmark, a place of beauty and
                  tranquility where visitors could marvel at the power of nature
                  as the water cascaded down the rocks in a shimmering curtain.
                  But one day, the locals arrived to find that the waterfall had
                  vanished without a trace.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ALotOfBlogPosts;
