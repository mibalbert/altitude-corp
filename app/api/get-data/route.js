/**
 * get-data/route.js
 */

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const folderId = await req.json();

    const data = await prisma.folder.findMany({
      where: {
        parentFolderId: folderId,
      },
    });

    // if()

    return NextResponse.json({ message: `Success` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Request Failed" }, { status: 400 });
  }
}
