/**
 * sign-in/page.jsx
 */

import SignInForm from "@/components/admin/sign-in-form";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";

export const metadata = {
  title: "ALTITUDE CORP | Sign-In",
  description: "Best company to help you grow",
};

export default async function SignIn() {
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/admin");
  // }

  return <SignInForm />;
}
