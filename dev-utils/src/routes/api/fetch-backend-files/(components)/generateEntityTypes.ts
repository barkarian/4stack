import type { SchemaFileContext } from "./fileUtils";

type AttributeType = {
    type: string;
    relation?: string;
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

export const generateEntityReadableTypes = (input: SchemaFileContext): string => {
    const schema: SchemaContent = JSON.parse(input.content);
    const entityTypeName = input.entityApiName.split("::").pop()?.replace(/\./g, '-') ?? "UnknownType";
    let tsCode = `type ${entityTypeName} = {\n    id: number;\n`;

    Object.entries(schema.attributes).forEach(([key, value]) => {
        let type = value.type;
        switch (value.type) {
            case 'integer':
                type = 'number';
                break;
            case 'string':
            case 'boolean':
            case 'date':
                // TypeScript has native types for these
                break;
            case 'enumeration':
                type = 'string'; // Assuming enumeration values are strings, adjust as necessary
                break;
            case 'media':
                type = 'Media[]';
                break;
            case 'relation':
                const targetTypeName = value.target?.split("::").pop()?.replace(/\./g, '-') ?? "any";
                type = `StrapiEntity<"${value.target}">` + (value.relation === 'manyToMany' || value.relation === 'oneToMany' ? '[]' : '');
                break;
            default:
                type = 'any';
        }
        tsCode += `    ${key}: ${type};\n`;
    });

    // Assuming 'ownerOfTheProduct' is a standard field to be included in every entity
    tsCode += `    ownerOfTheProduct: StrapiEntity<"plugin::users-permissions.user">;\n`;
    tsCode += `}\n\n`;
    tsCode += `type Media = any;\n`; // Define 'Media' and 'StrapiEntity' types as needed
    tsCode += `type StrapiEntity<T extends string> = T;\n`; // Simplified, adjust based on actual usage

    return tsCode;
};