"use client"

import { handleChangeResCoverImg } from '@/app/_ac/res-cov-img';
import { UploadButton, UploadDropzone, cn } from '@/lib/utils';
import React from 'react'
import { toast } from 'sonner'
import Image from 'next/image'
import axios from 'axios'


const ResourceImage = ({ isEditable, resourceId, resImage, className }) => {
    const handleDeleteResImage = async (e) => {
        e.preventDefault()
        await axios.delete('api/uploadthing', {
            data: {
                url: resImage,
            },
        })
        const res = await handleChangeResCoverImg(resourceId, null)
        toast(res.message)
    }

    return (

        <main className={cn("w-full h-full", className)}>
            {
                isEditable ?
                    <>
                        {
                            resImage ?
                                <div className='relative w-full h-full'>
                                    <button onClick={handleDeleteResImage} className='absolute top-0 right-0 z-[50] p-5 text-xl hover:scale-110' >X</button>
                                    <Image src={resImage || '/fulllogo_transparent_nobuffer.png'} alt='asd' fill className='' />
                                </div>
                                :
                                <div>
                                    askdnaksl
                                </div>
                        }
                    </>
                    : <div className={cn('relative w-full h-full', className)}>
                        <Image src={resImage || '/fulllogo_transparent_nobuffer.png'} alt='asd' fill className='' />
                    </div>

            }
        </main>
    )
}

export default ResourceImage
