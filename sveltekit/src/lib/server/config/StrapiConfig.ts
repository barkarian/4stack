import { PUBLIC_STRAPI_DOMAIN } from "$env/static/public";
import Strapi from "strapi-sdk-js";

export const strapiApi = new Strapi({
    url: PUBLIC_STRAPI_DOMAIN,
    prefix: '/api'
    // store: {
    //     key: STRAPI_JWT,
    //     useLocalStorage: false,
    //     cookieOptions: { path: "/" },
    // },
    // axiosOptions: {},
});
