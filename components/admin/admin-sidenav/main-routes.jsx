/**
 * main-routes.jsx
 */

"use client"

import { ChevronsUpDown } from 'lucide-react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import Link from 'next/link'
import { Home, Mail } from 'lucide-react'
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

const MainRoutes = () => {
    const pathNmae = usePathname()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (pathNmae === "/admin/subscribers" || pathNmae === "/admin") setOpen(true)
    }, [pathNmae])


    return (
        <Collapsible open={open} onOpenChange={setOpen} className={cn("border rounded-lg border-gray-400  transition-transform duration-200", { "border-none": !open })}>
            <CollapsibleTrigger className={cn("w-full px-4 py-2 text-left border rounded-lg border-gray-400 flex items-center justify-between", { "border-none": open })}>
                <div>

                    Main
                </div>
                <ChevronsUpDown className="w-4 h-4" />

            </CollapsibleTrigger>
            <CollapsibleContent className=" space-y-0.5 pb-2 px-2 transition-transform duration-200">
                <hr className="max-w-[93%] mx-auto" />
                <Link
                    href={"/admin"}

                    className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200   h-full rounded-md", { "bg-gray-200": pathNmae === "/admin" })}
                // className="flex items-center gap-2 px-3 py-1"
                >
                    <Home className="h-4 w-4" /> Dashboard
                </Link>
                <Link
                    href={"/admin/subscribers"}

                    className={cn("flex items-center gap-2 px-3 py-1.5 hover:bg-slate-200 h-full rounded-md", { "bg-gray-200": pathNmae === "/admin/subscribers" })}
                // className="flex items-center gap-2 px-3 py-1"
                >
                    <Mail className="h-4 w-4" /> Subscribers
                </Link>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default MainRoutes
