import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';
import { rootDirectory } from "$lib/utils/pathUtils";
import path from 'path';
import { promises as fs } from 'fs';
import { readAiContextFiles } from "../../../lib/utils/file-utils/readAiContextFiles";
import { generateStrapiEntityTypes, getSchemaFilesToRead } from "../../../lib/utils/file-utils/fileUtils";


export const GET: RequestHandler = async ({ request }) => {
    try {
        const schemaFiles = getSchemaFilesToRead();
        const code = generateStrapiEntityTypes(schemaFiles)
        //add code to rootDirectory/dev-utils/src/lib/ai-context/core/readableEntityTypes.txt
        const filePath = path.join(rootDirectory, 'dev-utils/src/lib/ai-context/core/readableEntityTypes.md');

        await fs.writeFile(filePath, code, 'utf8');
        //Fetch all files in dev-utils/src/lib/ai-context/<any>/<any>.txt and add them in an array with an object of: parrent folder name and context of the file
        const contexts = await readAiContextFiles();
        //Return the schema files and code as before
        return json({ contexts });
    } catch (e) {
        throw new Error("something went wrong");
    }
};