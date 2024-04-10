/**
 * layout.jsx
 */

import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/components/providers/session-provider";
import { Toaster } from "sonner";
import MainNav from "@/components/navigation/main-nav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from "@/app/api/uploadthing/core";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ALTITUDE CORP",
  description: "Best company to help you grow",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Toaster position="bottom-center" />
          <MainNav session={session} />
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <div className="relative ">{children}</div>
          <Footer />
        </NextAuthProvider>
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}
