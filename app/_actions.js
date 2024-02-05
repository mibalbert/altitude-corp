"use server";

import { useRouter } from "next/navigation";
import prisma from "@/lib/prismadb";
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
import { S3Client } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid'


export async function handleLoginAction(prevState, formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    
    const res = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!res) {
      return { ok: false, error: "Email is not in the db" };
    }
    
    return { ok: true, error: "" };



  } catch (error) {
    return { error: error };
  }
}

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
