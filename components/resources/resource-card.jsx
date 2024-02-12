/**
 * components/resources/card.jsx
 */

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ResourceCard = ({
  title,
  date,
  image,
  buttonText,
  buttonColor,
  buttonTextColor,
}) => {
  return (
    <div className="w-full max-w-2xl">
      <div className="flex flex-row items-center gap-4">
        <Image
          alt="Resource Image"
          className="object-cover w-1/2"
          height={50}
          src={image}
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width={50}
        />
        <div>
          <h3 className="text-lg font-semibold mt-2">{title}</h3>
          <p className="text-xs text-gray-500">{date}</p>
          <Button
            className={`px-2 py-1 rounded-md ${buttonColor} ${buttonTextColor}`}
            size="sm"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ResourceCard;
