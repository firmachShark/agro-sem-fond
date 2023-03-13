/** @type {import('next').NextConfig} */
const path = require('path')
const ROUTES = require('./src/constants/routes')

const pathsToRewrite = Object.entries(ROUTES).map((seq) => seq.reverse())

const rewrites = pathsToRewrite.map(([ru, eng]) => ({
    source: encodeURI(ru),
    destination: '/' + eng,
}))

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.xn--80agdjnxfar7i.xn--90ais',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
            },
        ],
    },
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "common.scss";`,
    },
    async rewrites() {
        return rewrites
    },
    i18n: {
        locales: ['ru'],
        defaultLocale: 'ru',
    },
}

module.exports = nextConfig
