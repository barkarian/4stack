import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';
import { generateStrapiEntityTypes, getSchemaFilesToRead } from "./(components)/fileUtils";

export const GET: RequestHandler = async ({ request }) => {
    try {
        const schemaFiles = getSchemaFilesToRead();
        const code = generateStrapiEntityTypes(schemaFiles)

        return json({ schemaFiles, code });
    } catch (e) {
        throw new Error("something went wrong");
    }
};