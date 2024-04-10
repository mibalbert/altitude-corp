/**
 * blog-posts-collapsible.jsx
 */


import FoldersAndFiles from "./folders-and-files-list";
import CreateFolderButton from "./create-folder-button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

const BlogPostCollapsible = () => {
    return (
        <Collapsible>
            <CollapsibleTrigger className="w-full px-3 py-1 text-left border rounded-lg my-1">Blog Posts
            </CollapsibleTrigger>
            <CollapsibleContent>
                <FoldersAndFiles
                    className={"w-full h-full overflow-auto "}
                />
                <CreateFolderButton
                    className={"flex items-center my-2 rounded-lg  gap-2 border w-full min-h-[27px] text-sm py-2 px-3 hover:bg-gray-100 text-muted-foreground font-medium active:bg-primary/5 active:text-primary"}
                />
            </CollapsibleContent>
        </Collapsible>
    )
}

export default BlogPostCollapsible
