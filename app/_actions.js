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





export async function addResourceImageUrl(resourceId, resourceImgUrl) {
  try {
    
    const res = await prisma.resource.update({
      where:{
        id: resourceId
      },
      data:{
        coverImage: resourceImgUrl
      }
    })
    if(res){
      revalidatePath(`/resources`);
      return { message: "Cover Image changed", ok: true }
    } else {
      return {
        message: "Failed to change cover image",
        ok:falses
      }
    }
  } catch (error) {
    console.error("Error updating title:", error.message);
    return { message: error.message, ok: false };
  }
}
export async function updateResourceTitle(resourceId, newResourceTitle) {
  try {
    // Check if all updates were successful
    
    const res = await prisma.resource.update({
      where:{
        id: resourceId
      },
      data:{
        title: newResourceTitle
      }
    })
    if(res){
      revalidatePath(`/resources`);
      return { message: "Title changed", ok: true }
    } else {
      return {
        message: "Failed to update title",
        ok:falses
      }
    }
  } catch (error) {
    console.error("Error updating title:", error.message);
    return { message: error.message, ok: false };
  }
}
export async function updateResourceCoverImage(resourceId) {
  try {
    const res = await prisma.resource.update({
      where: {
          id: resourceId
      },
      data: {
          coverImage: "/placeholder.svg"
      }

  })
    if(res){
      revalidatePath(`/resources`);
      return { message: "Description changed", ok: true }
    } else {
      return {
        message: "Failed to update description",
        ok:falses
      }
    }
  } catch (error) {
    console.error("Error updating description:", error.message);
    return { message: error.message, ok: false };
  }
}
export async function updateResourceDescription(resourceId, newResourceDescription) {
  try {
    const res = await prisma.resource.update({
      where:{
        id: resourceId
      },
      data:{
        description: newResourceDescription
      }
    })
    if(res){
      revalidatePath(`/resources`);
      return { message: "Description changed", ok: true }
    } else {
      return {
        message: "Failed to update description",
        ok:falses
      }
    }
  } catch (error) {
    console.error("Error updating description:", error.message);
    return { message: error.message, ok: false };
  }
}


export async function setNewResourcesPositions(resourcesArr) {
  try {
    const updateOperations = resourcesArr.map(async (resource) => {
      return prisma.resource.update({
        where: { id: resource.id },
        data: { position: resource.position },
      });
    });

    const results = await Promise.all(updateOperations);

    // Check if all updates were successful
    if (results.every((result) => result !== null && result !== undefined)) {
      revalidatePath(`/resources`);
      return { message: "Status changed", ok: true };
    } else {
      throw new Error("Error updating positions");
    }
  } catch (error) {
    console.error("Error updating positions:", error.message);
    return { message: error.message, ok: false };
  }
}
export async function setNewPositions(postsArr) {
  try {
    const updateOperations = postsArr.map(async (post) => {
      return prisma.post.update({
        where: { id: post.id },
        data: { position: post.position },
      });
    });

    const results = await Promise.all(updateOperations);

    // Check if all updates were successful
    if (results.every((result) => result !== null && result !== undefined)) {
      revalidatePath(`/testing2`);
      return { message: "Status changed", ok: true };
    } else {
      throw new Error("Error updating positions");
    }
  } catch (error) {
    console.error("Error updating positions:", error.message);
    return { message: error.message, ok: false };
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
    const res = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        isFeatured: changeTo,
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
    const posts = await prisma.post.findMany({
      select: {
        position: true,
      },
      orderBy: {
        position: "desc",
      },
    });

    const res = await prisma.post.create({
      data: {
        title: "Untitled",
        folderId: +parentFolderId,
        isPublished: false,
        content: `[{"id":"38b36aa1-7668-4b54-9d99-d91c57261271","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":2},"content":[{"type":"text","text":"Unlocking Financial Excellence: ALTITUDE CORP's Journey","styles":{"bold":true}}],"children":[]},{"id":"75495876-93b5-42fd-9a5b-97450917e31a","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"718f4799-5d4f-4507-b2e7-480ceba9fd34","type":"image","props":{"backgroundColor":"default","textAlignment":"left","url":"https://mongo-blog.s3.eu-central-1.amazonaws.com/blog/fulllogo_transparent_nobuffer.png","caption":"","width":512},"children":[]},{"id":"7e8532f7-5181-45cc-bbeb-43bf80ea4b0c","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"1eb583d8-4f4e-46fa-bc85-a0dd97e92748","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"6fa3a063-9f21-4ec0-b345-95682409a60d","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":3},"content":[{"type":"text","text":"Visionary Leadership","styles":{"bold":true}}],"children":[]},{"id":"b710e08a-dc62-4820-a623-4c1bd0f03186","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"ALTITUDE CORP is guided by visionary leaders who prioritize innovation, strategic foresight, and sustainable growth. Their bold decisions and forward-thinking approach have propelled the company to new heights.","styles":{}}],"children":[]},{"id":"28b4a154-e60a-4c46-adb3-daf337499ef8","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"f982bcb7-a991-4a95-a256-7b4ff25d70e0","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":3},"content":[{"type":"text","text":"Exceptional Financial Performance","styles":{"bold":true}},{"type":"text","text":" ","styles":{}}],"children":[]},{"id":"68f8ac96-1a0d-4ae3-aa46-71847851fd35","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"We consistently deliver exceptional financial results, showcasing our proficiency in resource management, investment optimization, and risk mitigation. Our robust financial strategies have garnered praise and trust from investors worldwide.","styles":{}}],"children":[]},{"id":"d985b8ca-1775-43b7-bf0a-43ffc9e0f554","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"684fd4b6-9509-430c-98ba-2f4893d19152","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]}]`,
        position: posts[0]?.position + 1 || 0,
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

export async function changeFolderName(folderId, newFolderName) {
  try {
    const res = await prisma.folder.update({
      where: {
        id: folderId
      },
      data: {
        title: newFolderName
      }
    });
    if(res){
      revalidatePath('/admin/folders')
      return {
        url: `/admin/folders/${folderId}`,
        message: `Successfully changed folder name to: ${newFolderName}`,
        ok: true,
      };

    } else{
      return {
        url: `/admin/folders/${folderId}`,
        message: `Failed to change name for folder: ${folderId}`,
        ok: false,
      };
    }
  } catch (error) {
    return {
      url: `/admin/folders/${folderId}`,
      message: `Server Error`,
      ok: false,
    };
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
    // Recursive function to delete folder and its contents
    const deleteFolderAndContents = async (folderId) => {
      // Find all subfolders of the current folder
      const subFolders = await prisma.folder.findMany({
        where: {
          parentFolder: folderId,
        },
        select: {
          id: true,
        }
      });

      // Recursively delete each subfolder and its contents
      for (const subFolder of subFolders) {
        await deleteFolderAndContents(subFolder.id);
      }

      // Delete all posts in the current folder
      await prisma.post.deleteMany({
        where: {
          folderId: folderId,
        },
      });

      // Delete the current folder
      await prisma.folder.delete({
        where: {
          id: folderId,
        },
      });
    };

    // Call the recursive function to delete the folder and its contents
    await deleteFolderAndContents(folderId);

    // Revalidate the current path
    revalidatePath(currentPath);

    return {
      url: `/admin/folders/${folderId}`,
      message: `Successfully deleted ${folderTitle} and all of its content`,
      ok: true,
    };
  } catch (error) {
    return {
      message: `Could not delete ${folderTitle}`,
      ok: false,
    };
  }
}

// export async function deleteFolder(folderId, folderTitle, currentPath) {
//   try {


//     const subFolders = await prisma.folder.findMany({
//       where: {
//         parentFolder: folderId,
//       },
//       select: {
//         id: true,
//       }
//     });

//     if (subFolders.length) {
            
   
//     } 
    


//     const res = await prisma.folder.delete({
//       where: {
//         id: folderId,
//       },
//     });

//     console.log(res)

//     // //Delete all child posts
//     // parentFolder?.map(async (el) => {
//     //   await prisma.post.deleteMany({
//     //     where: {
//     //       folderId: el.id,
//     //     },
//     //   });
//     // });

//     // await prisma.folder.deleteMany({
//     //   where: {
//     //     parentFolder: folderId,
//     //   },
//     // });
//     if (res) {
//       revalidatePath(currentPath);
//       return {
//         url: `/admin/folders/${folderId}`,
//         message: `Successfully deleted ${folderTitle} and all of it's content`,
//         ok: true,
//       };
//     }
//     return {
//       message: `Successfully deleted`,
//       ok: false,
//     };
//   } catch (error) {
//     return {
//       // message: `Could not deleted ${folderTitle}`,
//       message: `Could not deleted `,
//       ok: false,
//     };
//   }
// }

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
