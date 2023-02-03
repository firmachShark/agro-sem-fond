/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "common.scss";`,
    },
}

module.exports = nextConfig
