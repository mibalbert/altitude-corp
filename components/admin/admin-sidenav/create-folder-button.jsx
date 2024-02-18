import { createFolder } from "@/app/_actions";
import { cn } from "@/lib/utils";
import { Plus, PlusCircleIcon } from "lucide-react";
import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const CreateFolderButton = () => {
  const router = useRouter();
  const handleCreateFolder = async () => {
    try {
      const res = await createFolder();
      if (res.ok) {
        toast.success(res.message);

        router.push(res.url);
      }
    } catch (error) {
      toast.error(JSON.stringify(error));
    }
  };

  return (
    <button
      type="button"
      onClick={handleCreateFolder}
      className={cn(
        "flex items-center my-2 rounded-lg  gap-2 border w-52 min-h-[27px] text-sm py-2 px-3 hover:bg-gray-100 text-muted-foreground font-medium active:bg-primary/5 active:text-primary"
      )}
    >
      <PlusCircleIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
      New Folder
    </button>
  );
};

export default CreateFolderButton;
