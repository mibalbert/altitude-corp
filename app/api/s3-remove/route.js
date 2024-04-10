/**
 * s3-remove/route.js
 */

import { NextResponse } from "next/server";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export async function POST(request) {
    try {
        const { fileName, folderName } = await request.json()

        if (!fileName) {
            return NextResponse.json({ error: "File name is required." }, { status: 400 });
        }

        console.log("The nidddddd cssssss ssss ss s s s s s  s sss  s s s s s sss s se filename", fileName)

        const deleteParams = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${folderName}/${fileName.split("/").slice(-1)[0]}`,
        }

        let res = await s3Client.send(new DeleteObjectCommand(deleteParams))

        if (res['$metadata'].httpStatusCode === 204) {

            return NextResponse.json({ message: "Successfully deleted cooverImage", success: false });
        }

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
