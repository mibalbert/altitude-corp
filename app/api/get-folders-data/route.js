/**
 * get-data/route.js
 */

import prisma from "@/lib/prismadb";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { folderId } = await req.json();

    console.log("ASDASDASD", folderId);

    const data = await prisma.folder.findMany({
      where: {
        parentFolder: folderId,
      },
      include: {
        posts: true,
      },
      orderBy: {
        title: "asc", // Sort folders by title in ascending order
      },
    });
    if (data) {
      revalidateTag("collection");
      return NextResponse.json(
        { folders: data, message: "Success", ok: true },
        { status: 200 }
      );
    }
    return NextResponse.json({ message: "Success", ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Request Failed" }, { status: 400 });
  }
}
