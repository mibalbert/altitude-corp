/**
 * saving-button.jsx
 */

"use client";

import { savePostContentChange } from "@/app/_actions";
import { useBlogPostData } from "@/hooks/use-blog-post-data";
import { cn } from "@/lib/utils";
import { Check, Timer } from "lucide-react";
import { revalidatePath } from "next/cache";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

const SavingButton = ({ initContent, className, postId }) => {
  const { newData, onNewData } = useBlogPostData();
  const { toast } = useToast();

  const handleSaveContent = async () => {
    try {
      const data = JSON.stringify(newData);
      const res = await savePostContentChange(postId, data);
      if (res.ok) {
        console.log(res)
        toast("Successfully saved!");
        // onNewData(initContent);
        // console.log(res)
      } else {
        toast("Failed to save.");
      }
    } catch (error) {
      toast("Server Error");
      console.log(error);
    }
  };

  return (
    <>
      {JSON.stringify(newData) === JSON.stringify(initContent) ? (
        <button className={cn("flex items-center", className)} disabled>
          <Check className="w-4 h-4" /> Saved
        </button>
      ) : (
        <button
          className={cn("flex items-center", className)}
          onClick={handleSaveContent}
        >
          <Timer className="w-4 h-4" /> Save
        </button>
      )}
    </>
  );
};

export default SavingButton;
