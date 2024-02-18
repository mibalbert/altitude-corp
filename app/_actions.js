"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath, revalidateTag } from "next/cache";

export async function savePostCoverImageUrl(postId, url) {
  try {
    const res = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        coverImage: url,
      },
    });

    if (res) {
      revalidatePath(`/admin/posts/${postId}`);
      return {
        message: "Success",
        ok: true,
      };
    }
    return { message: "Failed to upload file", ok: false };
  } catch (error) {
    return { message: "Error", ok: false };
  }
}

export async function getData(postId) {
  try {
    const data = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });
    if (data) {
      return { data: data, message: "success", ok: true };
    }
    return { message: "Error", ok: false };
  } catch (error) {
    console.log(error);
    return { message: "Error", ok: false };
  }
}

export async function savePostTitleChange(postId, newTitle) {
  try {
    console.log("postId", postId);
    console.log("newTitle", newTitle);

    const res = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title: newTitle,
      },
    });
    if (res) {
      revalidatePath(`/admin/posts/${postId}`);
      return { isPublished: res.isPublished, message: "Success", ok: true };
    }
    return { message: "Failes", ok: false };
  } catch (error) {
    return { message: "Error", ok: false };
  }
}

export async function savePostContentChange(postId, data) {
  try {
    // const res = await prisma.post.update({
    //   where: {
    //     id: postId,
    //   },
    //   data: {
    //     content: data,
    //   },
    // });
    const res = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        content: data,
      },
    });
    console.log("The res", res);
    if (res) {
      // return "Success";
      revalidatePath(`/admin/posts/${postId}`);
      return JSON.stringify({ message: "Data saved", ok: true });
    }
    // return "Failed"
    return JSON.stringify({ message: "Error saving the data", ok: false });
  } catch (error) {
    return "Error";
    // return { message: error, ok: false };
  }
}
export async function changeVisibility(postId, changeTo) {
  try {
    const res = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        isPublished: !changeTo,
      },
    });

    if (res) {
      revalidatePath(`/admin/posts/${postId}`);
      return { message: "Visibility changed", ok: true };
    }
    return { message: "Error", ok: false };
  } catch (error) {
    console.log(error);
    return { message: error, ok: false };
  }
}

export async function createPostUnderFolder(parentFolderId) {
  try {
    const res = await prisma.post.create({
      data: {
        title: "Untitled",
        folderId: parentFolderId,
        isPublished: false,
      },
    });

    if (res) {
      // revalidatePath(`/admin/posts/${res.id}`);
      revalidateTag("collection");
      return {
        url: `/admin/posts/${res.id}`,
        message: "Successfuly created post with title Untitled",
        ok: true,
      };
    }
    return {
      message: "Could not create new post",
      ok: false,
    };
  } catch (error) {
    return { message: "Could not create new post", ok: false };
  }
}
export async function createFolder(parentFolderId) {
  try {
    if (!parentFolderId) {
      const newFolder = await prisma.folder.create({
        data: {
          title: "Untiled",
        },
      });
      return {
        url: `/admin/folders/${newFolder.id}`,
        message: "New Untitled Folder created",
        ok: true,
      };
    }
    const newFolder = await prisma.folder.create({
      data: {
        parentFolder: parentFolderId,
        title: "Untiled",
      },
    });
    return {
      url: `/admin/folders/${newFolder.id}`,
      message: "New Untitled Folder created",
      ok: true,
    };
  } catch (error) {
    return { message: error, ok: false };
  }
}
export async function createNewBlogPost() {
  try {
    const res = await prisma.folder.create({
      data: {
        title: "Untiled",
      },
    });

    const op = await prisma.post.create({
      data: {
        title: "First Blog Post",
        isPublished: false,
        folderId: res.id,
      },
    });

    return { ok: true, url: `/admin/posts/${op.id}` };
  } catch (error) {
    return "Error";
  }
}

export async function getFoldersData(parentFolder) {
  try {
    const data = await prisma.folder.findMany({
      where: { parentFolder },
      include: {
        posts: true,
      },
      orderBy: {
        title: "asc", // Sort folders by title in ascending order
      },
    });

    return { data: data, message: "Success", ok: true };
  } catch (error) {
    return { message: error, ok: false };
  }
}

export async function getFolders() {
  try {
    const res = await prisma.folder.findMany();
    return res;
  } catch (error) {
    return "Error";
  }
} 
export async function deletePost(postId, postTitle, currentPath) {
  try {
    const { folderId } = await prisma.post.findFirst({
      where: {
        id: postId,
      },
    });

    const res = await prisma.post.delete({
      where: {
        id: postId,
      },
    });
    if (res) {
      revalidatePath(currentPath);
      return {
        url: `/admin/folders/${folderId}`,
        message: `Successfully deleted ${postTitle}`,
        ok: true,
      };
    }
    return {
      message: `Successfully deleted ${postTitle}`,
      ok: false,
    };
  } catch (error) {
    return {
      message: `Could not deleted ${postTitle}`,
      ok: false,
    };
  }
}
// export async function createNewUndefinedPost() {
//   try {
//     return "abda123";
//   } catch (error) {
//     return "Error";
//   }
// }

// export async function loginFormAction(formData) {
//   try {
//     // const schema = z.object({
//     //   username: z.string().min(5),
//     //   password: z.string().min(5),
//     // });

//     // const parse = schema.safeParse({
//     //   username: formData.get("username"),
//     //   password: formData.get("password"),
//     // });

//     // console.log("aAS", parse);
//     // if (!parse.success) {
//     //   return { message: "Failed to authenticate", ok: false };
//     // }

//     // const data = parse.data;

//     // console.log("data", data);

//     // const res = await prisma.user.findFirst({
//     //   where: {
//     //     email: data.email,
//     //   },
//     // });

//     // if (!res) {
//     //   return { message: "Failed to authenticate", ok: false };
//     // }
//     const username = formData.get("username");
//     const password = formData.get("password");

//     // if (username !== "bigboss") {
//     //   return { message: "Failed to authenticate", ok: false };
//     // }

//     const res = await signIn("credentials", {
//       username: username,
//       password: password,
//     });

//     console.log(res);
//     return { message: "Failed to authenticate", ok: false };

//     // return { message: "Authenticated succesfully!", ok: true };
//   } catch (error) {
//     return { message: "Failed to authenticate", ok: false };
//   }
// }

// export async function getSignedFileUrl(prevState, formData) {
//   try {

//       const { filename, contentType } = formData.get('file')

//       try {
//         const client = new S3Client({ region: process.env.AWS_REGION })
//         const { url, fields } = await createPresignedPost(client, {
//           Bucket: process.env.AWS_BUCKET_NAME,
//           Key: uuidv4(),
//           Conditions: [
//             ['content-length-range', 0, 10485760], // up to 10 MB
//             ['starts-with', '$Content-Type', contentType],
//           ],
//           Fields: {
//             acl: 'public-read',
//             'Content-Type': contentType,
//           },
//           Expires: 600, // Seconds before the presigned post expires. 3600 by default.
//         })

//         return Response.json({ url, fields })
//       } catch (error) {
//         return Response.json({ error: error.message })
//       }
//     }

//     // if (!res) {
//     //   return { ok: false, error: "Email is not in the db" };
//     // }

//     return { ok: true, error: "" };

//   } catch (error) {
//     return { error: error };
//   }
// }
