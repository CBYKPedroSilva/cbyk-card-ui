/** @type {import('next').NextConfig} */

const pwaConfig = {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
}

const imagesConfig = {
    images: { disableStaticImages: true }
}

const nextConfig = { reactStrictMode: true }

const withPWA = require('next-pwa')(pwaConfig)
const withImages = require('next-images')

module.exports = withImages({
    ...imagesConfig,
    ...withPWA({ ...nextConfig, pwa: pwaConfig })
})
