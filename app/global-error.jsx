"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="h-full flex flex-col items-center justify-center space-y-4">
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
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
          <h2 className="text-xl font-medium">Something went wrong!</h2>
          <Button asChild>
            <Link href="/">Go back</Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
