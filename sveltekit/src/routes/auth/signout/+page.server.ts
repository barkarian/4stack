import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { AUTH_REDIRECTS } from '$lib/config/redirects';

export const load: PageServerLoad = async (event) => {
    //<4S_CODE_BLOCK #You could add your custom code if needed
    const redirectUrlPath: string = AUTH_REDIRECTS.signoutRedirect ?? "/"
    //4S_CODE_BLOCK>
    event.cookies.delete("jwt", {
        path: "/",
    })
    console.log({ redirectUrlPath })
    return {
        redirectUrlPath
    }
}
