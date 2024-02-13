module.exports = ({ env }) => ({
    proxy: true,
    // url: env('PUBLIC_STRAPI_DOMAIN'), // Sets the public URL of the application.
    app: {
        keys: env.array('APP_KEYS')
    },
});