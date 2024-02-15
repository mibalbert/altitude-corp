import { createFolder } from "@/app/_actions";
import { cn } from "@/lib/utils";
import { Plus, PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const CreateFolderButton = () => {
  const router = useRouter()
  const handleCreateFolder = async ()=>{
    try {
      
      const res = await createFolder()
      if(res.ok){
        toast.success(res.message)
        router.push(res.url)
      }


    } catch (error) {
      toast.error(JSON.stringify(error))
    }
  }

  return (
    
    <button
    type="button"
    onClick={handleCreateFolder}
    className={cn(
      "flex items-center w-full gap-2  min-h-[27px] text-sm py-1 px-3  text-muted-foreground font-medium active:bg-primary/5 active:text-primary"
    )}
  >
    <PlusCircleIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
    Folder
  </button>
  );
};

export default CreateFolderButton;
