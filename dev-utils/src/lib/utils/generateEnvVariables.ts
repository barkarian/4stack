import fs from 'fs';
import crypto from 'crypto';
import { rootDirectory } from './pathUtils';

function overwriteFile(file: string, ctx: string): void {
    //Check if file exists and if it does, delete it
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    }
    //Create new file
    fs.writeFileSync(file, ctx);
}

function generateKey(): string {
    const keyLength: number = 16; // 16 bytes = 128 bits
    const key: string = crypto.randomBytes(keyLength).toString('base64');
    return key;
}

function getStrapiEnvFileInitCtx(JWT_SECRET: string): string {
    const HOST: string = '127.0.0.1';
    const PORT: string = '1337';
    const APP_KEYS: string = `${generateKey()},${generateKey()},${generateKey()},${generateKey()}`;
    const API_TOKEN_SALT: string = `${generateKey()}`;
    const ADMIN_JWT_SECRET: string = `${generateKey()}`;
    const TRANSFER_TOKEN_SALT: string = `${generateKey()}`;
    const PUBLIC_STRAPI_DOMAIN: string = 'http://localhost:1337';
    const DATABASE_CLIENT: string = 'sqlite';
    const DATABASE_FILENAME: string = '.tmp/data.db';
    const URL: string = 'http://localhost:1337';

    return `HOST=${HOST}
PORT=${PORT}
APP_KEYS=${APP_KEYS}
API_TOKEN_SALT=${API_TOKEN_SALT}
ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
TRANSFER_TOKEN_SALT=${TRANSFER_TOKEN_SALT}
PUBLIC_STRAPI_DOMAIN=${PUBLIC_STRAPI_DOMAIN}
DATABASE_CLIENT=${DATABASE_CLIENT}
DATABASE_FILENAME=${DATABASE_FILENAME}
JWT_SECRET=${JWT_SECRET}
URL=${URL}`;
}

function getSveltekitEnvFileInitCtx(JWT_SECRET: string): string {
    const PUBLIC_STRAPI_DOMAIN: string = 'http://localhost:1337';

    return `PUBLIC_STRAPI_DOMAIN=${PUBLIC_STRAPI_DOMAIN}
JWT_SECRET=${JWT_SECRET}`;
}

//Main
export function generateEnvVariables(): void {
    const JWT_SECRET: string = generateKey();
    const strapiCtx: string = getStrapiEnvFileInitCtx(JWT_SECRET);
    overwriteFile(`${rootDirectory}/strapi/.env`, strapiCtx);
    const sveltekitCtx: string = getSveltekitEnvFileInitCtx(JWT_SECRET);
    overwriteFile(`${rootDirectory}/sveltekit/.env`, sveltekitCtx);
    console.log("New env variables have been configured")
    // console.log({ strapiCtx, sveltekitCtx });
}