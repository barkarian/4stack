import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_STRAPI_DOMAIN } from '$env/static/public';
import { strapiApi } from '$lib/server/config/StrapiConfig';
import type { StrapiEntity } from '$lib/types/strapi/StrapiTypes';
import { AUTH_REDIRECTS } from '$lib/config/redirects';
let successRedirectUrlPath: string = AUTH_REDIRECTS.singinSuccess ?? "/profile"
const failureRedirectUrlPath: string = AUTH_REDIRECTS.signinFailure ?? "/";

export const load: PageServerLoad = async (event) => {
    const callbackUrl = `${PUBLIC_STRAPI_DOMAIN}/api/auth/${event.params.providerName}/callback${event.url.search}`;

    let data: any; //Request's body
    try {
        const response = await fetch(callbackUrl);
        if (response.status !== 200) {
            data = await response.json();
            throw new Error(`Couldn't login to Strapi. Status: ${response.status}\nJSON BODY: ${JSON.stringify(data)}`);
        }
        data = await response.json();
        console.log({ data })
    } catch (err) {
        //Not Authenticated Schenario
        console.error("AUTHENTICATION ERROR:" + err);
        // console.log({ data })
        let errorMessage: string = data?.error?.name && data?.error?.status && data?.error?.message ? `${data?.error?.status} ${data?.error?.name}\nAn error occurred during authentication:${data?.error?.message}\n Please try again.` :
            "An error occured during authentication"
        if (failureRedirectUrlPath) throw redirect(302, failureRedirectUrlPath)
    }

    //Get jwt with more encoded data from custom end point
    try {
        const userInfoResponse = await strapiApi.axios({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${data.jwt}`
            },
            url: "users/me"
        });

        //<4S_CODE_BLOCK #Add your custom code if needed
        //Set success redirect url
        successRedirectUrlPath = "/profile"
        // jwt_token
        const jwt = userInfoResponse.data.jwt;
        event.cookies.set("jwt", jwt, {
            path: "/",
        })
        // The jwt contains
        const clientSideInfosEmbeddedInJwt: StrapiEntity<"plugin::users-permissions.user"> = { ...userInfoResponse.data.user, jwt: undefined };
        // Construct userInfo store and local storage
        const userInfoStoreData: StrapiEntity<"plugin::users-permissions.user"> = {
            ...clientSideInfosEmbeddedInJwt,
        };
        //4S_CODE_BLOCK>

        return {
            userInfoStoreData,
            successRedirectUrlPath
        }
    } catch (e) {
        console.error(e)
        throw redirect(302, failureRedirectUrlPath)
    }
}
