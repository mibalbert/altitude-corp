/**
 * not-found.jsx
 */

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4 py-52 overflow-hidden">
      <Image
        src="/error.png"
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        height="300"
        width="300"
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Page Not Found!</h2>
      <Button asChild className="bg-blue-600 text-white">
        <Link href="/" className="">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back
        </Link>
      </Button>
    </div>
  );
}
