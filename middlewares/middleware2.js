/**
 * middleware2.js
 */


import { analytics } from '@/utils/analytics'

// export function middleware(request) { }
// Set to store unique visitor identifiers
const uniqueVisitors = new Set();

export function withMiddleware2(middleware) {
    return async (
        request,
        event,
        response
    ) => {
        const pathname = new URL(request.url).pathname

        // Check if request has user and user has id before tracking
        if (request.user && request.user.id && !uniqueVisitors.has(request.user.id)) {
            try {
                await analytics.track('pageview', {
                    page: pathname,
                    country: request.geo?.country,
                })

                // Add visitor identifier to the set
                uniqueVisitors.add(request.user.id);
            } catch (err) {
                // fail silently to not affect request
                console.error(err)
            }
        }

        return middleware(request, event, response)
    }
}
