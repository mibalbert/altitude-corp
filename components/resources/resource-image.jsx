/**
 * resource-image.jsx
 */


"use client";

import React, { useState, useCallback } from 'react';
import { X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';
import { addResourceImageUrl } from '@/app/_actions';
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { handleChangeResCoverImg } from '@/app/_ac/res-cov-img';

const ResourceImageUpload = ({ resourceId, resImage, isEditable, className }) => {

    const [uploading, setUploading] = useState(false);


    const handleDrop = useCallback(async acceptedFiles => {
        const file = acceptedFiles[0];
        if (!file) return;

        // setUploading(true);

        // try {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('folderName', 'resources');
        formData.append('resourceId', resourceId)

        
        const res = await handleChangeResCoverImg(formData)
        
        
        //     if (uploadResult.ok) {
        //         const addImageUrlResult = await addResourceImageUrl(resourceId, uploadResult.url);
        //         if (addImageUrlResult.ok) {
        //             toast(`Image uploaded successfully: ${addImageUrlResult.message}`);
        //         } else {
        //             toast(`Failed to add image URL: ${addImageUrlResult.message}`);
        //         }
        //     } else {
        //         toast(`Failed to upload image: ${uploadResult.message}`);
        //     }
        // } catch (error) {
        //     console.error('Error during image upload:', error);
        //     toast('An error occurred during image upload.');
        // } finally {
        //     setUploading(false);
        // }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        maxFiles: 1,
        accept: {
            // "application/pdf": [".pdf"],
            // "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
            "image/*": [".jpg", ".jpeg"],
        },
    });



    const handleRemoveResCoverImage = async () => {
        try {
            const response = await fetch('/api/s3-remove', {
                method: 'POST',
                body: JSON.stringify({
                    fileName: resImage,
                    folderName: "resources",
                    resourceId: resourceId
                })
            });

            console.log("The response from the fetch", response)
            const data = await response.json();

            if (data.success) {

                const res = await updateResourceCoverImage(resourceId)
                if (res.ok) {
                    toast('Successfully deleted the Cover Image')
                }
            } else {
                toast('Error when deleting the Cover Image')
            }
        } catch (error) {
            setError(JSON.stringify(error))
        }
    }


    return (
        <div className={cn('relative h-full flex items-center justify-center', className)}>
            {
                isEditable &&
                <>
                    <button className='absolute top-0 right-0 py-10 px-5 z-[9]' onClick={handleRemoveResCoverImage} disabled={uploading}><X /></button>
                    <div {...getRootProps()} className={`absolute top-0 left-0 z-[6] w-full h-full hover:cursor-pointer flex items-center justify-center text-center hover:bg-white/20 group`}>
                        <input {...getInputProps()} className='w-full h-full ' />
                        {/* {isDragActive ? <p>Drop the files here...</p> : */}
                        {
                            !uploading &&
                            <p className='group-hover:block hidden'> Drag 'n' drop some files here, <br /> or click to select files</p>
                        }
                        {/* }*/}
                    </div>
                </>
            }
            {
                uploading ? <div>Loading...</div> :

                    <Image
                        alt="Resource Image"
                        className="object-contain w-full h-full"
                        fill
                        src={'/placeholder.svg'}
                        // src={(resImage === "/placeholder.svg" ? "/fulllogo_transparent_nobuffer.png" : resImage) || '/placeholder.svg'}
                    // src={"/placeholder.svg"}
                    />
            }
        </div >
    );
};

export default ResourceImageUpload;




{/* // <div className={cn(`h-full relative w-1/2 bg-[url(${resImage || "/placeholder.svg"} )] bg-cover `)}>

        //     {isEditable ? */}
//         (<div {...getRootProps()} className={`absolute top-0 left-0 w-full h-full `}>
//             <input {...getInputProps()} />

{/* uploading ? (
        <div>Loading...</div> */}
{/* {isDragActive ? <p>Drop the files here...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
        </div>
    ) : (
    <></> */}
// <Image
//   alt="Resource Image"
//   className="object-cover w-full h-full"
//   fill
//   src={data.coverImage || "/placeholder.svg"}
// // src={"/placeholder.svg"}
// />
// )}
// </div>