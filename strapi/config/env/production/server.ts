
module.exports = ({ env }) => ({
    proxy: true,
    url: env('PUBLIC_STRAPI_DOMAIN', 'http://localhost:1337'),
    app: {
        keys: env.array('APP_KEYS')
    },
});