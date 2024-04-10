/**
 * components/admin/sign-in-form.jsx
 */

"use client";

import { signIn } from "next-auth/react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
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

export default function SignInForm({ }) {
  const [pending, setPending] = useState(false);
  const [numTries, setNumTries] = useState(0);
  const [error, setError] = useState("");


  const params = useSearchParams()

  useEffect(() => {

    if (params?.get('error')?.length) setError(params.get('error'))
  }, [])



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
    e.preventDefault();
    setPending(true);

    const credentials = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await signIn("credentials", {
        ...credentials,
        callbackUrl: "/admin",
        // redirect: false,
      });

    } catch (error) {
      console.error("Error during sign-in:", error);
      setError("An error occurred during sign-in. Please try again later.");
    }

    setPending(false);
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
    </div>
  );
}
