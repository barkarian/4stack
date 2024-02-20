import { exec } from 'child_process';

export const runNpmScript = (projectDirectory: string, scriptName: string) => {
    exec(`cd ${projectDirectory} && npm run ${scriptName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}