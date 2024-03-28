"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath, revalidateTag } from "next/cache";

export async function changeValueOfObj(objId, newValue) {
  try {
    const res = await prisma.pageObject.update({
      where: {
        id: objId,
      },
      data: {
        title: newValue,
      },
    });

    if (res) {
      // revalidatePath(`/admin/posts/${postId}`);
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
    const res = await prisma.post.update({
      where: {
        id: +postId,
      },
      data: {
        content: data,
      },
    });
    if (res) {
      revalidatePath(`/admin/posts/${postId}`);
      return { message: "Data saved", ok: true };
    }
    return { message: "Error saving the data", ok: false };
  } catch (error) {
    console.log(error);
    return "Error";
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

export async function changeFeatListOrder(featListId, newOrder) {
  try {
    const res = await prisma.featList.update({
      where: {
        id: featListId,
      },
      data: {
        order: newOrder,
      },
    });

    if (res) {
      revalidatePath(`/testing2`);
      return { message: "Status changed", ok: true };
    }
    return { message: "Error", ok: false };
  } catch (error) {
    console.log(error);
    return { message: error, ok: false };
  }
}
export async function makeFeatured(postId, changeTo) {
  try {
    // if (featList.p/.find(el=> el.))
    const featList = await prisma.featList.findFirst({
      where: {
        id: 1,
      },
      include: {
        list: {
          select: {
            id: true,
          },
        },
      },
    });
    const isInList = featList?.list?.find((el) => el.id === postId);

    const res = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        isFeatured: changeTo,
        featList: isInList
          ? { disconnect: { id: featList.id } }
          : { connect: { id: featList.id } },
      },
    });

    if (res) {
      revalidatePath(`/admin/posts/${postId}`);
      return { message: "Status changed", ok: true };
    }
    return { message: "Error", ok: false };
  } catch (error) {
    console.log(error);
    return { message: error, ok: false };
  }
}

export async function createPostUnderFolder(parentFolderId) {
  try {
    console.log("fiaskjdn", parentFolderId);
    const res = await prisma.post.create({
      data: {
        title: "Untitled",
        folderId: +parentFolderId,
        isPublished: false,
        content: `[{"id":"38b36aa1-7668-4b54-9d99-d91c57261271","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":2},"content":[{"type":"text","text":"Unlocking Financial Excellence: ALTITUDE CORP's Journey","styles":{"bold":true}}],"children":[]},{"id":"75495876-93b5-42fd-9a5b-97450917e31a","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"718f4799-5d4f-4507-b2e7-480ceba9fd34","type":"image","props":{"backgroundColor":"default","textAlignment":"left","url":"https://mongo-blog.s3.eu-central-1.amazonaws.com/blog/fulllogo_transparent_nobuffer.png","caption":"","width":512},"children":[]},{"id":"7e8532f7-5181-45cc-bbeb-43bf80ea4b0c","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"1eb583d8-4f4e-46fa-bc85-a0dd97e92748","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"6fa3a063-9f21-4ec0-b345-95682409a60d","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":3},"content":[{"type":"text","text":"Visionary Leadership","styles":{"bold":true}}],"children":[]},{"id":"b710e08a-dc62-4820-a623-4c1bd0f03186","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"ALTITUDE CORP is guided by visionary leaders who prioritize innovation, strategic foresight, and sustainable growth. Their bold decisions and forward-thinking approach have propelled the company to new heights.","styles":{}}],"children":[]},{"id":"28b4a154-e60a-4c46-adb3-daf337499ef8","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"f982bcb7-a991-4a95-a256-7b4ff25d70e0","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":3},"content":[{"type":"text","text":"Exceptional Financial Performance","styles":{"bold":true}},{"type":"text","text":" ","styles":{}}],"children":[]},{"id":"68f8ac96-1a0d-4ae3-aa46-71847851fd35","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"We consistently deliver exceptional financial results, showcasing our proficiency in resource management, investment optimization, and risk mitigation. Our robust financial strategies have garnered praise and trust from investors worldwide.","styles":{}}],"children":[]},{"id":"d985b8ca-1775-43b7-bf0a-43ffc9e0f554","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"684fd4b6-9509-430c-98ba-2f4893d19152","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]}]`,
      },
    });
    console.log(res);

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
    console.log(error);
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

export async function deletePost(postId, postTitle, folderId, currentPath) {
  try {
    const deletedPost = await prisma.post.delete({
      where: { id: postId },
    });
    console.log(deletePost);
    return {
      url: `/admin/folders/${folderId}`,
      message: `Successfully deleted ${postTitle}`,
      ok: true,
    };
    // If the post was successfully deleted
    // if (deletedPost) {
    //   // Update the current path
    //   revalidatePath(currentPath);
    //   return {
    //     url: `/admin/folders/${folderId}`,
    //     message: `Successfully deleted ${postTitle}`,
    //     ok: true,
    //   };
    // }
    // // If the post was not found
    // return {
    //   message: `Post with ID ${postId} not found`,
    //   ok: false,
    // };
  } catch (error) {
    console.error("Error deleting post:", error);
    return {
      message: `Could not delete ${postTitle}`,
      ok: false,
    };
  }
}

export async function deleteFolder(folderId, folderTitle, currentPath) {
  try {
    const { parentFolder } = await prisma.folder.findMany({
      where: {
        parentFolder: folderId,
      },
    });

    //Delete all child posts
    parentFolder?.map(async (el) => {
      await prisma.post.deleteMany({
        where: {
          folderId: el.id,
        },
      });
    });

    await prisma.folder.deleteMany({
      where: {
        parentFolder: folderId,
      },
    });
    if (res) {
      revalidatePath(currentPath);
      return {
        url: `/admin/folders/${folderId}`,
        message: `Successfully deleted ${folderTitle} and the containing posts`,
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
