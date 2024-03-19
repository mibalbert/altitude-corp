/**
 * make-featured.jsx
 */
"use client";

import { makeFeatured } from "@/app/_actions";
import { toast } from "sonner";

const MakeFeatured = ({ postId, featuredStatus }) => {
  const handleMakeFeatured = async () => {
    try {
      const res = await makeFeatured(postId, !featuredStatus);
      if (res.ok) {
        toast("Succeesss!");
      }
    } catch (error) {
      console.log(error);
      toast("Failed");
    }
  };

  return (
    <button
      onClick={() => handleMakeFeatured()}
      className="w-full py-2 hover:bg-gray-100"
    >
      {featuredStatus ? <div>Featured</div> : <div>Not Featured</div>}
    </button>
  );
};

export default MakeFeatured;
