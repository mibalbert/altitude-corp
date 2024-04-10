/**
 * redis.js
 */

import { Redis } from '@upstash/redis'


export const redis = new Redis({
    url: "https://eu1-innocent-impala-39956.upstash.io",
    token: process.env.UPSTASH_TOKEN || "",
})