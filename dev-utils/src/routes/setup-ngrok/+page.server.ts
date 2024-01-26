import type { PageServerLoad } from "./$types";
import { startNgrok } from "./(utils)/startNgrok.server";

export const load: PageServerLoad = async () => {
    // Spin up tunnels
    const {
        auth0SettingsUrl,
        auth0CallbackUrlToSet,
    } = await startNgrok()
    return { auth0SettingsUrl, auth0CallbackUrlToSet };
};