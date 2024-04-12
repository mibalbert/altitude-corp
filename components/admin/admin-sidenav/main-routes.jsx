/**
 * main-routes.jsx
 */

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import Link from 'next/link'
import { Home, Mail } from 'lucide-react'

const MainRoutes = () => {
    return (
        <Collapsible >
            <CollapsibleTrigger className="w-full px-3 py-1 text-left border rounded-lg">Main</CollapsibleTrigger>
            <CollapsibleContent className="py-1 space-y-0.5">
                <Link
                    href={"/admin"}
                    className="flex items-center gap-2 px-3"
                >
                    <Home className="h-4 w-4" /> Dashboard
                </Link>
                <Link
                    href={"/admin/subscribers"}
                    className="flex items-center gap-2 px-3"
                >
                    <Mail className="h-4 w-4" /> Subscribers
                </Link>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default MainRoutes
