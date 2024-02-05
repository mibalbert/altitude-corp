/**
 * s3-img-up/route.js
 */

import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	}
});

async function uploadFileToS3(file, fileName) {
	const fileBuffer = file;
	console.log(fileName);

	const folderName = "blog"; // Change this to your desired folder name

	const params = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: `${folderName}/${fileName}`, // Include the folder name in the Key
		Body: fileBuffer,
		ContentType: "image/jpg"
	}

	try {
		const command = new PutObjectCommand(params);
		await s3Client.send(command);
		return `${folderName}/${fileName}`;
	} catch (error) {
		console.error("Error uploading file to S3:", error);
		throw new Error("Failed to upload file to S3");
	}
}

export async function POST(request) {
	try {
		const formData = await request.formData();
		const file = formData.get("file");

		if (!file) {
			return NextResponse.json({ error: "File is required." }, { status: 400 });
		}

		const buffer = Buffer.from(await file.arrayBuffer());
		const fileName = await uploadFileToS3(buffer, file.name);

		return NextResponse.json({ success: true, fileName });
	} catch (error) {
		console.error("Error processing request:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
