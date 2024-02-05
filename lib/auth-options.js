/**
 * authOptions.ts
 */

import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";


import prisma from "@/lib/prismadb";

export const authOptions = {
  // adapter: PrismaAdapter(prisma),  
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  // debug: process.env.NODE_ENV !== "production",
  
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              username: credentials?.username,
            },
          });

          if (!user) {
            throw new Error("Username not found");
          }

          // Compare the provided password with the stored hashed password
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!passwordMatch) {
            throw new Error("Incorrect password");
          }

          return user;
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {...token, ...user}
    },
    //Client side session. Everything you return here can be accessed in the client side.
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token?.id;
        session.user.role = token?.role ?? "USER";
      }
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
    error: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
