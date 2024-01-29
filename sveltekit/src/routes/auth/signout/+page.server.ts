import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { SIGNOUT_REDIRECT } from '$env/static/private';

export const load: PageServerLoad = async (event) => {
    //<4S_CODE_BLOCK #You could add your custom code if needed
    const redirectUrlPath: string = SIGNOUT_REDIRECT ?? "/"
    //4S_CODE_BLOCK>
    event.cookies.delete("jwt", {
        path: "/",
    })
    console.log({ redirectUrlPath })
    return {
        redirectUrlPath
    }
}
