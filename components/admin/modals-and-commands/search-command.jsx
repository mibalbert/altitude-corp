/**
 * search-command.jsx (the modal of the search)
 */

"use client";

import { useEffect, useState } from "react";
import { File } from "lucide-react";
// import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
// import { useUser } from "@clerk/clerk-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/hooks/use-search";
import { getFolders } from "@/app/_actions";
// import { api } from "@/convex/_generated/api";

export const SearchCommand = () => {
  // const { user } = useUser();
  const router = useRouter();
  // const documents = useQuery(api.documents.getSearch);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const getDocuments = async () => {
      const res = await getFolders();
      setFolders(res)
    };
    getDocuments()

  },[]);

  const [isMounted, setIsMounted] = useState(false);

  const toggle = useSearch((store) => store.toggle);
  const isOpen = useSearch((store) => store.isOpen);
  const onClose = useSearch((store) => store.onClose);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const onSelect = (id) => {
    router.push(`/folders/${id}`);
    onClose();
  };

  if (!isMounted) {
    return null;
  }

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder={`Search Jotion...`} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Documents">
          {folders?.map((folder) => (
            <CommandItem
              key={folder.id}
              value={`${folder.id}-${folder.title}`}
              title={folder.title}
              onSelect={() => onSelect(folder.id)}
            >
              {folder.icon ? (
                <p className="mr-2 text-[18px]">{folder.icon}</p>
              ) : (
                <File className="mr-2 h-4 w-4" />
              )}
              <span>{folder.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
