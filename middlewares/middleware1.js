import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

import { getToken } from 'next-auth/jwt'
// import { Locale, i18n } from '@/i18n.config'
// import { CustomMiddleware } from './chain'

const protectedPaths = '/admin'

export function withMiddleware1(middleware) {
    return async (request, event) => {
        // Create a response object to pass down the chain
        const response = NextResponse.next()

        const token = await getToken({ req: request })



        request.nextauth = request.nextauth || {}
        request.nextauth.token = token

        const pathname = request.nextUrl.pathname


        if (!token && pathname.startsWith(protectedPaths)) {
            const signInUrl = new URL('/api/auth/signin', request.url)
            signInUrl.searchParams.set('callbackUrl', pathname)
            return NextResponse.redirect(signInUrl)
        }

        return middleware(request, event, response)
    }
}