module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'postgres',
                url: env('DATABASE_URL'),
                host: env('DATABASE_HOST'),
                port: env('DATABASE_PORT'),
                database: env('DATABASE_NAME'),
                username: env('DATABASE_USERNAME'),
                password: env('DATABASE_PASSWORD'),
            },
            options: {}
        }
    }
});