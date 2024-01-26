//TODO Not tested yet
export function fetchTsFunctions(ctx: string, functionNames: string[]): string {
    const functions: string[] = [];
    const lines = ctx.split('\n');

    for (const line of lines) {
        const functionName = line.match(/function\s+(\w+)\s*\(/);
        if (functionName && functionNames.includes(functionName[1])) {
            functions.push(line);
        }
    }

    return functions.join('\n');
}

export function fetchTsClasses(ctx: string, classNames: string[]): string {
    const classes: string[] = [];
    const lines = ctx.split('\n');

    for (const line of lines) {
        const className = line.match(/class\s+(\w+)\s*/);
        if (className && classNames.includes(className[1])) {
            classes.push(line);
        }
    }

    return classes.join('\n');
}

export function fetchTsTypes(ctx: string, typeNames: string[]): string {
    const types: string[] = [];
    const lines = ctx.split('\n');

    for (const line of lines) {
        const typeName = line.match(/type\s+(\w+)\s*/);
        if (typeName && typeNames.includes(typeName[1])) {
            types.push(line);
        }
    }

    return types.join('\n');
}