/**
 * app/actions/edit-web-pages/edit-home
 */

"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function changeHeroTitle(homeId, newTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        heroTitle: newTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
