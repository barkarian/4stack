import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
const currentDirectory = process.cwd();
const rootDirectory = path.dirname(currentDirectory);

function overwriteFile(file, ctx) {
    //Check if file exists and if it does, delete it
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    }
    //Create new file
    fs.writeFileSync(file, ctx);
}


function generateKey() {
    const keyLength = 16; // 16 bytes = 128 bits
    const key = crypto.randomBytes(keyLength).toString('base64');
    return key;
}

function getStrapiEnvFileInitCtx(JWT_SECRET) {
    const HOST = '127.0.0.1';
    const PORT = '1337';
    const APP_KEYS = `${generateKey()},${generateKey()},${generateKey()},${generateKey()}`;
    const API_TOKEN_SALT = `${generateKey()}`;
    const ADMIN_JWT_SECRET = `${generateKey()}`;
    const TRANSFER_TOKEN_SALT = `${generateKey()}`;
    const PUBLIC_STRAPI_DOMAIN = 'http://localhost:1337';
    const DATABASE_CLIENT = 'sqlite';
    const DATABASE_FILENAME = '.tmp/data.db';
    const URL = 'http://localhost:1337';

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

function getSveltekitEnvFileInitCtx(JWT_SECRET) {
    const PUBLIC_STRAPI_DOMAIN = 'http://localhost:1337';

    return `PUBLIC_STRAPI_DOMAIN=${PUBLIC_STRAPI_DOMAIN}
JWT_SECRET=${JWT_SECRET}`;
}

//Main
function generateEnvVariables() {
    const JWT_SECRET = generateKey();
    const strapiCtx = getStrapiEnvFileInitCtx(JWT_SECRET);
    overwriteFile(`${rootDirectory}/strapi/.env`, strapiCtx);
    const sveltekitCtx = getSveltekitEnvFileInitCtx(JWT_SECRET);
    overwriteFile(`${rootDirectory}/sveltekit/.env`, sveltekitCtx);
    console.log({ strapiCtx, sveltekitCtx });
}
generateEnvVariables()