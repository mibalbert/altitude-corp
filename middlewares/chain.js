/**
 * middlewares/chain.jsx
 */

import { NextMiddlewareResult } from 'next/dist/server/web/types'
import { NextResponse } from 'next/server'


export function chain(
    functions,
    index = 0
) {
    const current = functions[index]

    if (current) {
        const next = chain(functions, index + 1)
        return current(next)
    }

    return (
        request,
        event,
        response
    ) => {
        return response
    }
}