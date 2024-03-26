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

import { ArrowRightIcon } from "lucide-react";
import { Spinner } from "../spinner";
import { toast } from "sonner";

export default function SignInForm() {
  const [pending, setPending] = useState(false);
  const [numTries, setNumTries] = useState(0);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (numTries > 5) {
      setError("Maximum number of tries exceded, come back later");
    }
  }, [numTries]);

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => setError(""), 3000);
    }
  }, [error]);

  useEffect(() => {
    if (numTries > 5) {
      setTimeout(() => setNumTries(""), 6000);
    }
  }, [numTries, setNumTries]);

  const handleLoginAction = async (e) => {
    setPending(true);
    e.preventDefault();

    const res = await signIn("credentials", {
      email: e.target.email.value,
      password: e.target.password.value,
      callbackUrl: "/admin",
      // redirect: false,
    });

    if (!res) {
      setNumTries((state) => state + 1);
      setError(res.error.split(": ")[1]);
      setPending(false);
    } else {
      toast.success("Succesfully logged in!");
      setPending(false);
      // router.replace("/admin");
      // router.replace("/admin");
      // redirect("/admin");
    }
  };

  return (
    <div className="min-h-[80dvh] flex items-center justify-center">
      <Card className="mx-auto max-w-sm   border-none shadow-none">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl font-bold">Log In</CardTitle>
          <CardDescription>
            Enter your credentials below to log in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                // placeholder="m@example.com"
                required
                type="email"
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
            {error && (
              <p aria-live="polite" className="text-red-400" role="status">
                {error}
              </p>
            )}

            <Button
              className="w-full"
              type="submit"
              disabled={pending || numTries > 5}
            >
              {pending ? (
                <Spinner />
              ) : (
                <>
                  Log In
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </>
              )}
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
