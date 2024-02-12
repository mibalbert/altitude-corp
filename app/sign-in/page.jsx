import SignInForm from "@/components/admin/sign-in-form";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";


export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return <SignInForm />;
}
