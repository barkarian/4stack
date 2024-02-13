import fs from 'fs';
import path from 'path';
import { rootDirectory } from "./pathUtils";
import { generateEnvVariables } from './generateEnvVariables';

function isAuth0SettingsUrlConfigured(): boolean {
    const envFilePath = path.join(rootDirectory, 'dev-utils', '.env');
    if (fs.existsSync(envFilePath)) {
        const envFileContent = fs.readFileSync(envFilePath, 'utf-8');
        const envVariables = envFileContent.split('\n').map(line => line.trim());
        for (const envVar of envVariables) {
            if (envVar.startsWith('AUTH0_SETTINGS_URL=')) {
                const auth0Url = envVar.split('=')[1];
                if (auth0Url && auth0Url.trim() !== '') {
                    return true; // AUTH0_SETTINGS_URL found and not empty
                }
            }
        }
    }
    return false; // AUTH0_SETTINGS_URL not found or empty
}

export function setupApplication() {
    if (isAuth0SettingsUrlConfigured()) {
        console.log("Application has been configured")
        return true //setup is completed
    }
    else {
        generateEnvVariables();
        return false //setup is not completed -follow readme instructions
    }
}
