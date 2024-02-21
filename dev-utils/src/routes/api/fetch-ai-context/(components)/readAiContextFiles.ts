import { promises as fs } from 'fs';
import path from 'path';
import { rootDirectory } from "$lib/utils/pathUtils";

// Function to read all .txt files under a given directory and its subdirectories
export async function readAiContextFiles() {
    const baseDir = path.join(rootDirectory, 'dev-utils/src/lib/ai-context');
    const contexts = [];
    const directories = await fs.readdir(baseDir, { withFileTypes: true });

    for (const dir of directories) {
        if (dir.isDirectory()) {
            const dirPath = path.join(baseDir, dir.name);
            const files = await fs.readdir(dirPath, { withFileTypes: true });

            for (const file of files) {
                if (file.isFile() && file.name.endsWith('.txt')) {
                    const filePath = path.join(dirPath, file.name);
                    const content = await fs.readFile(filePath, 'utf8');
                    let contextName = dir.name; // Default contextName assignment

                    // Check if we are in the 'core' directory and adjust contextName accordingly
                    if (dirPath.endsWith('/core') || dirPath.endsWith('\\core')) {
                        contextName = "core-" + file.name.slice(0, -4); // Remove .txt extension for contextName
                    }

                    contexts.push({ contextName, content });
                }
            }
        }
    }

    return contexts;
}
