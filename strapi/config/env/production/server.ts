
module.exports = ({ env }) => ({
    proxy: true,
    url: env('PUBLIC_STRAPI_URL', 'http://localhost:1337'),
    app: {
        keys: env.array('APP_KEYS')
    },
});