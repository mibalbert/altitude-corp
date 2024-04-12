/**
 * create-user/route.js
 */

import { NextResponse } from "next/server";
// import countries from '@/lib/countries.json'
import prisma from "@/lib/prismadb";

export async function POST(req) {
    try {

        const res = await prisma.visitor.create({})
        console.log(res)

        // const { pathname, url, geo } = await req.json()

        // const country = geo.country || 'US'
        // const city = geo.city || 'San Francisco'
        // const region = geo.region || 'CA'

        // const res = await prisma.visitor.create({
        //     data: {
        //         visitorCountry: country,
        //         visitorCounty: region,
        //         visitorCity: city,
        //         pathnameAnalytics: {
        //             connectOrCreate: {
        //                 where: {
        //                     pathname: pathname,
        //                 },
        //                 create: {
        //                     pathname: pathname,
        //                 },
        //             },
        //         }

        //     }
        // })


        // const res = await prisma.analytics.upsert({
        //     where: { pathname: pathname },
        //     data: {
        //         pathname: pathname,
        //         visitorCountry: country,
        //         visitorCounty: region,
        //         visitorCity: city,
        //     }
        // })

        // console.log("THE RES", res)


        return NextResponse.json({ message: `I worked ` }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json("Something went wrong");
    }
}
