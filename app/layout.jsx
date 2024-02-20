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
          <>{children}</>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
