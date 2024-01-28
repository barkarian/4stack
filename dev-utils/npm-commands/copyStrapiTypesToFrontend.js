//npm-script DEPENDANCE => dev-utils:copyStrapiTypesToFrontend
import fs from 'fs';
import path from 'path';
import { rootDirectory } from '../pathUtils';

export const copyStrapiTypesToFrontend = (strapiPath, sveltekitPath) => {
    const sourcePath = path.join(rootDirectory, strapiPath);
    const destinationPath = path.join(rootDirectory, sveltekitPath);
    const destinationDir = path.dirname(destinationPath);

    // Check if source file exists
    if (!fs.existsSync(sourcePath)) {
        console.error(`Source file does not exist: ${sourcePath}`);
        return 'not ok';
    }

    // Ensure destination directory exists or create it
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    // Read the source file, modify its content and write to the destination file
    const content = fs.readFileSync(sourcePath, 'utf8');
    const modifiedContent = content.replace('@strapi/strapi', '@strapi/types');

    try {
        console.log({ destinationPath, modifiedContent })
        fs.writeFileSync(destinationPath, modifiedContent);
        console.log('File copied and modified successfully!');
        return 'ok';
    } catch (err) {
        console.error(`Error writing to destination file: ${err}`);
        return 'not ok';
    }
};

const strapiTypesPath = "./strapi/types/generated/contentTypes.d.ts";
const sveltekitTypesPath = "./sveltekit/src/lib/types/strapi/contentTypes.d.ts";
copyStrapiTypesToFrontend(strapiTypesPath, sveltekitTypesPath);