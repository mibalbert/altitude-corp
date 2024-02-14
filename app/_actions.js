"use server";

import { useRouter } from "next/navigation";
import prisma from "@/lib/prismadb";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

import { revalidatePath } from "next/cache";

import { z } from "zod";
import { signIn } from "next-auth/react";

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

    return { ok: true, url: `/admin/blog-posts/${res.id}/${op.id}` };
  } catch (error) {
    return "Error";
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
export async function getFoldersByParentId(parentFolderId) {
  try {
    const res = await prisma.folder.findMany({
      where: {
        parentFolderId: parentFolderId,
      },
    });
    return res;
  } catch (error) {
    return "Error";
  }
}
export async function createNewUndefinedPost() {
  try {
    return "abda123";
  } catch (error) {
    return "Error";
  }
}

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
