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
        ],
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "common.scss";`,
    },
}

module.exports = nextConfig
