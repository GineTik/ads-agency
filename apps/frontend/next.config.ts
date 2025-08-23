import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	// Your Next.js config here
	experimental: {
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'deifkwefumgah.cloudfront.net',
			},
		],
	},
}

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(nextConfig)
