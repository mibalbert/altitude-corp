"use client";

import { handleLoginAction } from "@/app/_actions";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import Image from "next/image";
// import { signIn } from "next-auth/react";

export default function SignInBtns() {
  const [numTries, setNumTries] = useState(0);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (numTries > 5) {
      setError("Maximum number of tries exceded, come back later");
    }
  }, [numTries]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    setSubmitting(true);
    const res = await signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
      callbackUrl: `${window.location.origin}`,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      setError(null);
    }
    setSubmitting(false);
    if (res.url) router.refresh();
    setError(res.error);
  };

  return (
    <div>
      <h1 className="text-center mt-8">Sign in</h1>
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
        </form>

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
      </div>
    </div>
  );
}
