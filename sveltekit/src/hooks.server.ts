import { JWT_SECRET } from '$env/static/private';
import { strapiApi } from '$lib/server/config/StrapiConfig';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import jwt from 'jsonwebtoken';


const setLocals: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get('jwt');
    try {
        if (!token) {
            throw "No jwt token found"

        }
        const decoded: any = jwt.verify(token, JWT_SECRET);
        if (!decoded || typeof decoded === 'string') {
            throw "Decoded error:" + decoded
        }
        strapiApi.setToken(token);

        //<4S_CODE_BLOCK
        // If you want you can get more info from strapi rather than just the jwt user infos
        event.locals.authenticatedUserInfo = decoded
        //4S_CODE_BLOCK>

        return resolve(event);
    } catch (err) {
        console.error(err)
        event.locals.authenticatedUserInfo = undefined
        return resolve(event);
    }
}

const userAuth: Handle = async ({ event, resolve }) => {
    console.log(`HOOK->url:${event.url.pathname} ,authenticatedUserEmail:${event.locals.authenticatedUserInfo?.email ?? "None"}`)
    if (!event.locals.authenticatedUserInfo) {
        if (event.url.pathname.startsWith("/profile")) {
            throw redirect(302, "/")
        }
    }
    return resolve(event)
}

export const handle: Handle = sequence(setLocals, userAuth);

