/**
 * components/post/saved-status.jsx
 */
"use client";

import { useSavingStatus } from "@/hooks/use-admin-saving-status";
import { cn } from "@/lib/utils";
import { Check, Timer } from "lucide-react";
import React from "react";

const SavedStatus = () => {
  const isSaved = useSavingStatus((state) => state.isSaved);
  return (
    <div
      className={cn(
        "text-xs border px-2 py-0.5 rounded-full",
        { "bg-green-600 border-green-400 text-green-100": isSaved },
        { "bg-gray-300 border-gray-500 text-gray-100": !isSaved }
      )}
    >
      {isSaved ? (
        <div className=" flex items-center gap-1">
          <Check className="h-4 w-4 text-green-100" />
          <span>saved</span>
        </div>
      ) : (
        <div className=" flex items-center gap-1">
          <Timer className="h-4 w-4 text-gray-100" />
          <span>saving</span>
        </div>
      )}
    </div>
  );
};

export default SavedStatus;
