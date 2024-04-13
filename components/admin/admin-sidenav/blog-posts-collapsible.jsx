/**
 * blog-posts-collapsible.jsx
 */

"use client"
import { ChevronsUpDown } from 'lucide-react';

import FoldersAndFiles from "./folders-and-files-list";
import CreateFolderButton from "./create-folder-button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';

const BlogPostCollapsible = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        if (pathname.startsWith('/admin/folders') || pathname.startsWith('/admin/posts')) setOpen(true)
    }, [pathname])

    return (
        <Collapsible open={open} onOpenChange={setOpen} className={cn("border rounded-lg border-gray-400 transition-transform duration-200", { "border-none": !open })}>
            <CollapsibleTrigger className={cn("w-full px-4 py-2 text-left border border-gray-400 rounded-lg flex items-center justify-between", { "border-none": open })}>
                <div>
                    Blog Posts
                </div>
                <ChevronsUpDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className=" space-y-0.5 pb-2 px-2 transition-transform duration-200">
                <hr className="max-w-[93%] mx-auto" />

                <FoldersAndFiles
                    className={"w-full h-full overflow-auto "}
                />
                <CreateFolderButton
                    className={"flex items-center my-2 rounded-lg mx-auto gap-2 border w-full min-h-[27px] text-sm py-2 px-3 hover:bg-gray-100 text-muted-foreground font-medium active:bg-primary/5 active:text-primary"}
                />
            </CollapsibleContent>
        </Collapsible>
    )
}

export default BlogPostCollapsible
