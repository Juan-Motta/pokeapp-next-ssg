const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
    reactStrictMode: true,
    images: {
        domains: ['assets.pokemon.com'],
        formats: ['image/avif', 'image/webp'],
    },
    redirects: async () => {
        return [
            {
                source: '/pokemons',
                destination: '/',
                permanent: true,
            },
        ];
    },
});
