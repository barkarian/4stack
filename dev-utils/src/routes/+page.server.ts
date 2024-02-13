import { setupApplication } from "$lib/utils/newApplicationHook";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // Spin up tunnels
    const isSetupCompleted = setupApplication();
    return { isSetupCompleted };
};