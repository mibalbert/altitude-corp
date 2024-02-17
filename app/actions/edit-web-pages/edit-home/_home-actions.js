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
export async function changeHeroSubtitle(homeId, newSubtitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        heroSubtitle: newSubtitle,
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
export async function changeHeroQuote(homeId, newQuote) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        heroQuote: newQuote,
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

export async function changeElevatorTitle(homeId, newElevatorTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        elevatorTitle: newElevatorTitle,
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

// <div className="absolute  min-w-[40%] h-auto bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[10%] z-[99]">
// <div className="absolute right-3 top-3">
//   {isQuoteChanging ? (
//     <Timer className="h-4 w-4" />
//   ) : (
//     <Check className="h-4 w-4" />
//   )}
// </div>
// <textarea
//   className="peer text-pretty  w-full h-full  bg-transparent text-xl   font-semibold text-center text-gray-200  outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   px-3 py-2.5 rounded-lg border-blue-gray-200 focus:border-gray-900"
//   defaultValue={data?.heroQuote}
//   onChange={handleQuoteChange}
// />
// </div>
