/**
 * components/resources/card.jsx
 */

"use client"

import { cn } from "@/lib/utils";
import { updateResourceDescription, updateResourceTitle } from "@/app/_actions";
import { toast } from 'sonner';
import ResourceImage from "@/components/resources/resource-img";
import FileResource from "./file-resource";

const ResourceCard = ({
  data,
  isEditable }) => {

  const handleChangeTitle = async (e) => {
    e.preventDefault()
    try {
      const res = await updateResourceTitle(data.id, e.target.value)
      if (res.ok) {
        toast('Changed Title for Resource')
      } else {
        toast('Failed')
      }
    } catch (error) {
      toast('Failed')
    }
  }
  const handleChangeDescription = async (e) => {
    e.preventDefault()
    try {
      const res = await updateResourceDescription(data.id, e.target.value)
      if (res.ok) {
        toast('Changed Title for Resource')
      } else {
        toast('Failed')
      }
    } catch (error) {
      toast('Failed')
    }
  }


  return (
    <div className={cn("w-full  flex items-center gap-5 h-[500px]", { "border border-dashed": isEditable })}>
      {/* Image */}
      <div className="w-1/2 h-full" >
        <ResourceImage resourceId={data.id} resImage={data.coverImage} isEditable={isEditable} />
      </div>
      {/* Text */}
      <div className="flex flex-col justify-start h-full items-start space-y-3 w-1/2 bg-green-500">
        {
          isEditable ? <input type="text" onBlur={handleChangeTitle} defaultValue={data.title} placeholder="Set the title" className="border p-2 line-clamp-3" /> :
            <h3 className="text-xl font-semibold mt-2 line-clamp-4">{data?.title}</h3>
        }
        {
          isEditable ? <textarea type="text" onBlur={handleChangeDescription} defaultValue={data.description} placeholder="Set the description" className="border p-2 line-clamp-6" />
            :
            <p className="text-left line-clamp-6">
              {data?.description}
            </p>
        }

        <FileResource resourceId={data.id} isEditable={isEditable} />
      </div>
    </div>
  );
};
export default ResourceCard;
