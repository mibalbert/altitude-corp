/**
 * sign-in/page.jsx
 */

import SignInForm from "@/components/admin/sign-in-form";

export const metadata = {
  title: "ALTITUDE CORP | Sign-In",
  description: "Best company to help you grow",
};

export default async function SignIn() {
  return <SignInForm />;
}
