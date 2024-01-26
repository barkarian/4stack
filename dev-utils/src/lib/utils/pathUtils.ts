import path from 'path';
const currentDirectory = process.cwd();
export const rootDirectory = path.dirname(currentDirectory);
import fs from 'fs';

export default function updateEnvVariable(envFile: string, envVariable: string, ngrokUrl: string): void {
    const data = fs.readFileSync(envFile, 'utf8');
    const lines = data.split('\n');

    const updatedLines = lines.map(line =>
        line.startsWith(envVariable + '=') ? `${envVariable}=${ngrokUrl}` : line
    );

    if (!lines.some(line => line.startsWith(envVariable + '='))) {
        updatedLines.push(`${envVariable}=${ngrokUrl}`);
    }

    fs.writeFileSync(envFile, updatedLines.join('\n').slice(0, -1));
}

export function overwriteFile(file: string, ctx: string): void {
    //Check if file exists and if it does, delete it
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    }
    //Create new file
    fs.writeFileSync(file, ctx);
}
