/**
 * create-user/route.js
 */

import { NextResponse } from "next/server";


export async function POST(req) {
    try {


        const op = await req.json()

        console.log("object", op)

        // const data  = await req.json()


        // console.log("The data",data)





        // return NextResponse.json({ message: `IT Fucking YO: ${yo}` }, { status: 200 });
        return NextResponse.json({ message: `IT Fucking YO: ` }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json("Something went wrong");
    }
}
