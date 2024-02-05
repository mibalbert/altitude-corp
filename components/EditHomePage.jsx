"use client";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import toast from "react-hot-toast";
import { getSignedFileUrl } from "@/app/_actions";
import { useFormState } from "react-dom";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const initialState = {
  message: "",
};

export default function EditHomePage({ data }) {
  const [state, formAction] = useFormState(changeHome, initialState);
  // const [imageUrl, setImageUrl] = useState(data?.heroImg || "");
  const [publicId, setPublicId] = useState("");
  const [enableEdit, setEnableEdit] = useState(false);

  // const onDrop = useCallback((acceptedFiles) => {
  //   // Do something with the files

  //   // const newFiles = Object.assign(acceptedFile, {
  //   //   preview: URL.createObjectURL(acceptedFile),
  //   // });

  //   const preview = URL.createObjectURL(acceptedFiles[0]);

  //   console.log("preview", preview);

  //   setImageUrl(preview);
  // }, []);
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   accept: {
  //     "image/*": [".jpeg", ".jpg", ".png"],
  //   },
  //   onDrop,
  // });

  const removeImage = async (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await getSignedFileUrl();

    const res = new FormData(e);

    console.log(res);
    // const res=  await submitTheNewHome(e)

    // if (res.error) {
    //   toast.error("Something went wrong");
    //   console.log(error);
    // }
    toast.success("Post edited successfully");
    // router.push("/admin");
    // router.refresh();
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <input value={data?.heroTitle || ""} placeholder="Title" />
        </div>
        <div>
          <input value={data?.heroSub || ""} placeholder="Subtitle" />
        </div>
        <div>
          <textarea />
        </div>
        {/* 
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>{`Drag 'n' drop some files here, or click to select files`}</p>
          )}
        </div>
        <div>
          <Image
            src={imageUrl || "/placeholder-image.png"}
            alt={"file preview"}
            width={100}
            height={100}
            onLoad={() => {
              URL.revokeObjectURL(imageUrl);
            }}
            className="h-full w-full rounded-lg object-cover object-center"
          />
          {imageUrl && <button onClick={() => setImageUrl("")}>X</button>}
        </div> */}

        {publicId && (
          <button
            onClick={removeImage}
            className="py-2 px-4 rounded-md font-bold w-fit bg-red-600 text-white mb-4"
          >
            Remove Image
          </button>
        )}

        <button className="primary-btn" type="submit">
          Update Home Page
        </button>
      </form>
    </div>
  );
}
