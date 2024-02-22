import fs from 'fs';
import { rootDirectory } from '$lib/utils/pathUtils.js';

type AttributeType = {
    type: string;
    relation?: string; //manyToOne, oneToMany, oneToOne, manyToMany
    target?: string;
    inversedBy?: string;
    multiple?: boolean;
    required?: boolean;
    allowedTypes?: string[];
};

type SchemaContent = {
    kind: string;
    collectionName: string;
    info: {
        singularName: string;
        pluralName: string;
        displayName: string;
        description: string;
    };
    options: {
        draftAndPublish: boolean;
    };
    pluginOptions: {};
    attributes: Record<string, AttributeType>;
};


export type FileContext = {
    name: string,
    relativePath: string,
    path: string,
    content: string
}

// New type extending FileContext with an additional property for entityApiName
export type SchemaFileContext = FileContext & {
    entityApiName: string
}

export type AiPromptInput = {
    model: "gpt-3.5-turbo" | "gpt-4-1106-preview",
    system: string,
    msg: string
}

export type AiPromptOutput = {
    message: string,
    error?: any
}

export type FetchBackendFilesOutput = {
    availableFiles: FileContext[]
}


export const getAllAvailableFileNamesToRead = () => {
    // Get all entity directories, ignoring any that start with "."
    let entityDirectories = fs.readdirSync(`${rootDirectory}/strapi/src/api`).filter(dir => !dir.startsWith('.'));
    const schemaFiles = entityDirectories.flatMap(entityDirectory => {
        // Also check inside the content-types directory to ignore any files/directories starting with "."
        const contentTypesPath = `${rootDirectory}/strapi/src/api/${entityDirectory}/content-types`;
        let contentTypesDirectories;
        try {
            contentTypesDirectories = fs.readdirSync(contentTypesPath).filter(dir => !dir.startsWith('.'));
        } catch (e) {
            console.error(`Error reading directory ${contentTypesPath}: ${e}`);
            return []; // Return an empty array if there's an error (e.g., directory does not exist)
        }
        return contentTypesDirectories.map(contentTypeDirectory => `${contentTypesPath}/${contentTypeDirectory}/schema.json`);
    });
    const schemaFilesWithUser = [...schemaFiles, `${rootDirectory}/strapi/src/extensions/users-permissions/content-types/user/schema.json`];
    // ADD ALL FILES YOUR CODE HERE
    //...
    const availableFileNames = [...schemaFilesWithUser];
    return availableFileNames;
}


export const getAllFilesToRead = (): FileContext[] => {
    try {
        const availableFileNames = getAllAvailableFileNamesToRead();
        let availableFiles: FileContext[] = availableFileNames.map((path) => {
            const content = fs.readFileSync(path, 'utf8');
            const relativePath = path.replace(`${rootDirectory}`, '');
            const name = relativePath.split('/').pop() ?? "";
            return { name, path, relativePath, content }
        });
        // console.log({availableFiles})
        return availableFiles
    } catch (e) {
        console.log(e);
        throw "something went wrong"
    }
};

export const getSchemaFilesToRead = (): SchemaFileContext[] => {
    try {
        const allFiles = getAllFilesToRead();
        const schemaFiles = allFiles.filter(file => file.path.endsWith('schema.json')).map(file => {
            // Derive entityApiName based on the relativePath of the file
            const isPlugin = file.relativePath.includes("/extensions/");
            const parts = file.relativePath.split('/');
            // console.log({ parts })
            const entityNameFirst = parts[parts.length - 4]; // Assuming entity name is always 3rd from last
            const entityNameLast = parts[parts.length - 2]; // Assuming entity name is always 3rd from last

            const apiType = isPlugin ? "plugin" : "api";
            const entityApiName = `${apiType}::${entityNameFirst}.${entityNameLast}`;
            return { ...file, entityApiName };
        });
        return schemaFiles;
    } catch (e) {
        console.log(e);
        throw "Something went wrong";
    }
};

// Updated mapStrapiTypeToTypeScriptType function
const mapStrapiTypeToTypeScriptType = (attribute: AttributeType) => {
    let baseType: string; // Base type without considering multiplicity
    switch (attribute.type) {
        case 'string':
        case 'text':
        case 'enumeration':
            baseType = 'string';
            break;
        case 'integer':
        case 'biginteger':
        case 'float':
        case 'decimal':
            baseType = 'number';
            break;
        case 'boolean':
            baseType = 'boolean';
            break;
        case 'date':
        case 'datetime':
            baseType = 'Date';
            break;
        case 'relation':
            const relationType = `StrapiEntity<"${attribute.target}">`;
            baseType = relationType;
            break;
        case 'media':
            baseType = 'Media';
            break;
        default:
            baseType = 'any'; // Fallback type for unsupported or custom types
    }

    // Determine if the attribute represents an array/multiple values
    const isArray = attribute.multiple || attribute.relation === 'manyToMany' || attribute.relation === 'oneToMany';
    return isArray ? `${baseType}[]` : baseType;
};


export const generateStrapiEntityTypes = (schemaFiles: SchemaFileContext[]): string => {
    let typeDefinitions = `type Media = { /* Define media type structure here */ };\n\n`;

    // Dynamically generate type definitions
    let entityTypes: { [key: string]: string } = {};

    schemaFiles.forEach(schemaFile => {
        const schema: SchemaContent = JSON.parse(schemaFile.content);
        const entityApiName = schemaFile.entityApiName;
        let typeDefinition = `{\n`;

        Object.entries(schema.attributes).forEach(([attributeKey, attribute]) => {
            typeDefinition += `    ${attributeKey}: ${mapStrapiTypeToTypeScriptType(attribute)};\n`;
        });

        typeDefinition += `}`;
        entityTypes[entityApiName] = typeDefinition;
    });

    // Generate TypeScript type definitions
    typeDefinitions += `type StrapiEntity<T> =\n`;
    Object.entries(entityTypes).forEach(([entityApiName, typeDefinition], index, array) => {
        typeDefinitions += `  T extends "${entityApiName}" ? ${typeDefinition}\n  :`;
        if (index < array.length - 1) {
            typeDefinitions += `\n`;
        } else {
            typeDefinitions += ` T extends "plugin::users-permissions.role"? any\n  :`;
            typeDefinitions += ` never;\n`;
        }
    });

    return typeDefinitions;
};