/**
 * create-user/route.js
 */

import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";


export async function POST(req) {
  try {
    const data = await req.json();

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const res = await prisma.user.create({
      data: {
        email: "admin@admin.com",
        username: data.username,
        password: hashedPassword
      }
    })

    console.log(res)

    return NextResponse.json({ message: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Something went wrong");
  }
}
