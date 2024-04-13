/**
 * make-featured.jsx
 */
"use client";

import {
  BadgeCheck,
  BadgeMinus,
} from "lucide-react";

import { makeFeatured } from "@/app/_actions";
import { toast } from "sonner";

const MakeFeatured = ({ postId, featuredStatus }) => {
  const handleMakeFeatured = async () => {
    try {
      const res = await makeFeatured(postId, !featuredStatus);
      if (res) {
        toast(res.message);
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
      {featuredStatus ?
        <div className="flex items-center whitespace-nowrap gap-1 px-3">
          <BadgeCheck className={"h-4 w-4"} />
          Featured
        </div> :

        <div className="flex items-center whitespace-nowrap gap-1 px-3">
          <BadgeMinus className={"h-4 w-4"} />
          Not Featured
        </div>
      }
    </button>
  );
};

export default MakeFeatured;
