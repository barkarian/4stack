import { getSchemaFilesToRead } from '../fetch-backend-files/(components)/fileUtils';

import type { RequestHandler } from "./$types";


export const GET: RequestHandler = async ({ request }) => {
    try {
        const allFiles = getSchemaFilesToRead();
        //filter allFiles.path that ends with schema.json
        const schemaFiles = allFiles.filter(file => file.path.endsWith('schema.json'));
    } catch (e) {
        throw new Error("something went wrong");
    }
};