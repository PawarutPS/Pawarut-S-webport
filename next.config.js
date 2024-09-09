// @ts-check

/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
			},			
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	env: {
		SITE_URL: process.env.SITE_URL,
		DOMAIN: process.env.DOMAIN,
		BASE_API_URL: process.env.BASE_API_URL,
		SECRET_KEY: process.env.SECRET_KEY,
		GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
		IS_ENABLE_SEO: process.env.IS_ENABLE_SEO,
	},
};
