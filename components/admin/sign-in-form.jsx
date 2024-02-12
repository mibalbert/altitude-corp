/**
 * components/admin/sign-in-form.jsx
 */

"use client";

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useFormState, useFormStatus } from "react-dom";
import { loginFormAction } from "@/app/_actions";
import { ArrowRightIcon } from "lucide-react";

const initialState = {
  message: "",
};

export default function SignInBtns() {
  const [numTries, setNumTries] = useState(0);

  useEffect(() => {
    if (numTries > 5) {
      setError("Maximum number of tries exceded, come back later");
    }
  }, [numTries]);

  const [state, handleLoginAction] = useFormState(
    loginFormAction,
    initialState
  );
  const { pending } = useFormStatus();
  useEffect(() => {
    state?.message.length > 0
      ? setTimeout(() => (state.message = ""), 300)
      : null;
  }, [state]);

  return (
    <div className="min-h-[80dvh] flex items-center justify-center">
      <Card className="mx-auto max-w-sm   border-none shadow-none">
        <CardHeader className="space-y-1 py-0">
          <CardTitle className="text-2xl font-bold">Log In</CardTitle>
          <CardDescription>
            Enter your username below to log in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleLoginAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                // placeholder="m@example.com"
                required
                type="username"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" required type="password" />
              <Link className="ml-auto inline-block text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
            <p aria-live="polite" role="status">
              {state?.message}
            </p>
            <Button className="w-full" type="submit" aria-disabled={pending}>
              Log In
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
      {/* <h1 className="text-center mt-8">Sign in</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" />
          </div>
          {error && <div>{error}</div>}
          <button type="submit">Login</button>
        </form> */}

      {/* <button
          onClick={() => signIn("github")}
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition"
        >
          <span>
            <Image
              src={"/github-logo.svg"}
              width={30}
              height={30}
              alt="GitHub Logo"
            />
          </span>
          Sign In With GitHub
        </button>

        <button
          onClick={() => signIn("google")}
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition"
        >
          <span>
            <Image
              src={"/google-logo.svg"}
              width={30}
              height={30}
              alt="Google Logo"
            />
          </span>
          Sign In With Google
        </button> */}
      {/* </div> */}
    </div>
  );
}
