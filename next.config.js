/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SITE_URL: 'https://next-material-photo-portfolio.pages.dev',
        name: 'Edu Designs'
    },
    images: {
        unoptimized: true,
    },
    output: 'export',
    staticPageGenerationTimeout: 300,
}

module.exports = nextConfig
