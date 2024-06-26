/**
 * s3-upload/route.js
 */

import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(fileBuffer, folderName, fileName, fileType, resourceId) {

  console.log("OoooooooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", `${folderName}/${resourceId}-${fileName}`)
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${folderName}/${resourceId}-${fileName}`,
    Body: fileBuffer,
    ContentType: fileType,
  };

  try {
    const command = new PutObjectCommand(params);
    const res = await s3Client.send(command);



    if (res['$metadata'].
      httpStatusCode === 200) {
      return {

        url: `https://mongo-blog.s3.eu-central-1.amazonaws.com/${folderName}/${resourceId}-${fileName}`,
      };
    }

  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw new Error("Failed to upload file to S3");
  }
}

export async function POST(request) {
  try {
   
    const formData = await request.formData();

    const file = formData.get("file");
    const folderName = formData.get("folderName");
    const resourceId = formData.get('resourceId')

    

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const response = await uploadFileToS3(
      buffer,
      folderName,
      file.name,
      file.type,
      resourceId
    );

    return NextResponse.json({ success: true, url: response.url });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// {
// 	"Version": "2012-10-17",
// 	"Statement": [
// 		{
// 			"Sid": "Statement1",
// 			"Effect": "Allow",
// 			"Principal": "*",
// 			"Action": "s3:*",
// 			"Resource": "arn:aws:s3:::mongo-blog"
// 		}
// 	]
// }
