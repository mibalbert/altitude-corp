/**
 * middleware2.js
 */


import { analytics } from '@/utils/analytics'
import countries from '@/lib/countries.json'

// export function middleware(request) { }
// Set to store unique visitor identifiers
const uniqueVisitors = new Set();

export function withMiddleware2(middleware) {
    return async (
        request,
        event,
        response
    ) => {



        const { nextUrl: url, geo } = request
        // const country = geo.country || 'US'
        // const city = geo.city || 'San Francisco'
        // const region = geo.region || 'CA'

        // const currencyCode = Object.keys(countryInfo.currencies)[0]
        // const currency = countryInfo.currencies[currencyCode]
        // const languages = Object.values(countryInfo.languages).join(', ')


        const pathname = new URL(request.url).pathname
        
        fetch('http://localhost:3000/api/analytics',
            {
                method: "POST",
                body: JSON.stringify({
                    pathname,
                    url,
                    geo
                })
            }
        )

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


