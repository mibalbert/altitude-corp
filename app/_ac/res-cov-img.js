/**
 * res-cov-img.js
 */

"use server"

import { revalidatePath } from 'next/cache'

export async function handleChangeResCoverImg(resId, resImgUrl) {
    try {
        const res = await prisma.resource.update({
            where: {
                id: resId,
            },
            data: {
                coverImage: resImgUrl
            }
        })
        if (res) {
            revalidatePath('/resources')
            return {
                message: "Succesfully changed the cover image",
                ok: true
            }
        }
        return {
            message: "Server Error",
            ok: false
        }
    } catch (error) {
        return {
            message: "Server Error",
            ok: false
        }
    }
}