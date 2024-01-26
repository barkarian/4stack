import ngrok from 'ngrok';
import { AUTH0_SETTINGS_URL } from '$env/static/private';
import updateEnvVariable, { rootDirectory } from '$lib/utils/pathUtils';

// Replace this with the appropriate type definition if you have one
type NgrokUrl = string;

function extractNgrokUrl(rawUrl: string): string {
    if (rawUrl.startsWith("NgrokTunnel:")) {
        const url = rawUrl.split('"')[1];
        return url;
    } else {
        return rawUrl.trim();
    }
}


export async function startNgrok(): Promise<{
    auth0SettingsUrl: string | undefined,
    auth0CallbackUrlToSet: string | undefined
}> {
    // Read Auth0 URL from .env
    const auth0SettingsUrl = AUTH0_SETTINGS_URL
    if (!auth0SettingsUrl) {
        updateEnvVariable(`${rootDirectory}/strapi/.env`, 'PUBLIC_STRAPI_DOMAIN', "http://localhost:1337");
        updateEnvVariable(`${rootDirectory}/sveltekit/.env`, 'PUBLIC_STRAPI_DOMAIN', "http://localhost:1337");
        console.error("Please set up Auth0 by following the instructions at: https://github.com/barkarian/4s-tack");
        return {
            auth0CallbackUrlToSet: undefined,
            auth0SettingsUrl: undefined
        };
    }

    const port = 1337;
    const url: NgrokUrl = await ngrok.connect({ port });

    console.log("Ngrok Tunnel:", url);

    const ngrokUrl = extractNgrokUrl(url);

    // Update .env files
    updateEnvVariable(`${rootDirectory}/strapi/.env`, 'PUBLIC_STRAPI_DOMAIN', ngrokUrl);
    updateEnvVariable(`${rootDirectory}/sveltekit/.env`, 'PUBLIC_STRAPI_DOMAIN', ngrokUrl);

    if (auth0SettingsUrl) {
        console.log(`-Browse here: ${auth0SettingsUrl}`);
        console.log(`-and SET Callback URLs to: ${ngrokUrl}/api/connect/auth0/callback`);
    }

    console.log("Press CTRL+C to close the tunnel...");

    process.on('SIGINT', () => {
        // Now that tunnel is closed, set PUBLIC_STRAPI_URL .env to localhost
        updateEnvVariable(`${rootDirectory}/strapi/.env`, 'PUBLIC_STRAPI_DOMAIN', "http://localhost:1337");
        updateEnvVariable(`${rootDirectory}/sveltekit/.env`, 'PUBLIC_STRAPI_DOMAIN', "http://localhost:1337");

        // Disconnect the tunnel
        ngrok.disconnect(url).then(() => {
            console.log('Ngrok tunnel disconnected.');
            process.exit(0);
        });
    });

    return {
        auth0SettingsUrl,
        auth0CallbackUrlToSet: `${ngrokUrl}/api/connect/auth0/callback`
    }
}
