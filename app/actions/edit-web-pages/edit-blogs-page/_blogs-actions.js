/**
 * _blog-actions.js
 */

"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function changeBlogPageTitle(blogPageId, newBlogPageTitle) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageTitle: newBlogPageTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeBlogPageSubtitle(blogPageId, newBlogPageSubtitle) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageSubtitle: newBlogPageSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeBlogPageLatestTitle(
  blogPageId,
  newBlogPageLatestTitle
) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageLatestTitle: newBlogPageLatestTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeBlogPageLatestSubtitle(
  blogPageId,
  newBlogPageLatestSubtitle
) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageLatestSubtitle: newBlogPageLatestSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeBlogPageExploreTitle(
  blogPageId,
  newBlogPageExploreTitle
) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageExploreTitle: newBlogPageExploreTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeBlogPageExploreSubtitle(
  blogPageId,
  newBlogPageExploreSubtitle
) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageExploreSubtitle: newBlogPageExploreSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeBlogPageSubscribeTitle(
  blogPageId,
  newBlogPageSubscribeTitle
) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageSubscribeTitle: newBlogPageSubscribeTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeBlogPageSubscribeSubtitle(
  blogPageId,
  newBlogPageSubscribeSubtitle
) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageSubscribeSubtitle: newBlogPageSubscribeSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeBlogPageSubscribeMinSubtitle(
  blogPageId,
  newBlogPageSubscribeMinSubtitle
) {
  try {
    const res = await prisma.blogPage.update({
      where: {
        id: blogPageId,
      },
      data: {
        blogPageSubscribeMinSubtitle: newBlogPageSubscribeMinSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/blog");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
