const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
    reactStrictMode: true,
    output: 'standalone',
    images: {
        domains: ['assets.pokemon.com'],
        formats: ['image/avif', 'image/webp'],
    },
});
