import path from 'path';
const currentDirectory = process.cwd();
export const rootDirectory = path.dirname(currentDirectory);
import fs from 'fs';
import ignore from 'ignore';
import { minimatch } from 'minimatch';

export default function updateEnvVariable(envFile: string, envVariable: string, ngrokUrl: string): void {
    const data = fs.readFileSync(envFile, 'utf8');
    const lines = data.split('\n');

    const updatedLines = lines.map(line =>
        line.startsWith(envVariable + '=') ? `${envVariable}=${ngrokUrl}` : line
    );

    if (!lines.some(line => line.startsWith(envVariable + '='))) {
        updatedLines.push(`${envVariable}=${ngrokUrl}`);
    }

    fs.writeFileSync(envFile, updatedLines.join('\n'));
}

export function overwriteFile(file: string, ctx: string): void {
    //Check if file exists and if it does, delete it
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
    }
    //Create new file
    fs.writeFileSync(file, ctx);
}

export function getDirectoryTreeToString(directory: string): string {
    const tree: string[] = [];

    function traverseDirectory(dir: string, prefix: string): void {
        const files = fs.readdirSync(dir, { withFileTypes: true });

        files.forEach(file => {
            const filePath = `${dir}/${file.name}`;
            const isDirectory = file.isDirectory();
            const linePrefix = prefix + (isDirectory ? '├── ' : '└── ');

            tree.push(`${linePrefix}${file.name}`);

            if (isDirectory) {
                traverseDirectory(filePath, prefix + (file.name !== files[files.length - 1].name ? '│   ' : '    '));
            }
        });
    }

    traverseDirectory(directory, '');

    return tree.join('\n');
}

type FileNode = {
    name: string;
    isDirectory: boolean;
    path: string;
    children?: FileNode[];
};


export function getDirectoryTree(directory: string): FileNode {
    const root: FileNode = {
        name: path.basename(directory),
        isDirectory: true,
        path: directory, // Set the path of the root node to the directory
        children: [],
    };

    function traverseDirectory(dir: string, parentNode: FileNode): void {
        const files = fs.readdirSync(dir, { withFileTypes: true });

        files.forEach((file) => {
            const filePath = path.join(dir, file.name);
            const isDirectory = file.isDirectory();

            const fileNode: FileNode = {
                name: file.name,
                isDirectory,
                path: filePath, // Set the path of the file node to the filePath
                children: isDirectory ? [] : undefined
            };

            if (isDirectory) {
                fileNode.children = [];
                traverseDirectory(filePath, fileNode);
            }

            parentNode.children?.push(fileNode);
        });
    }

    traverseDirectory(directory, root);

    return root;
}

export function getIgnoredDirectoryTree(directory: string, nodeIgnore: string): FileNode {
    const ig = ignore().add(nodeIgnore);
    const root: FileNode = {
        name: path.basename(directory),
        isDirectory: true,
        path: directory, // Set the path of the root node to the directory
        children: [],
    };

    function traverseDirectory(dir: string, parentNode: FileNode): void {
        const files = fs.readdirSync(dir, { withFileTypes: true });

        files.forEach((file) => {
            const filePath = path.join(dir, file.name);
            const isDirectory = file.isDirectory();

            // Ignore the file or directory if it matches the ignore rules
            if (ig.ignores(filePath)) {
                return;
            }

            const fileNode: FileNode = {
                name: file.name,
                isDirectory,
                path: filePath, // Set the path of the file node to the filePath
                children: isDirectory ? [] : undefined
            };

            if (isDirectory) {
                fileNode.children = [];
                traverseDirectory(filePath, fileNode);
            }

            parentNode.children?.push(fileNode);
        });
    }

    traverseDirectory(directory, root);

    return root;
}


export function getIncludedDirectoryTree(directory: string, nodeInclude: string): FileNode {
    const root: FileNode = {
        name: path.basename(directory),
        isDirectory: true,
        path: directory, // Set the path of the root node to the directory
        children: [],
    };

    function traverseDirectory(dir: string, parentNode: FileNode): void {
        const files = fs.readdirSync(dir, { withFileTypes: true });

        files.forEach((file) => {
            const filePath = path.join(dir, file.name);
            const isDirectory = file.isDirectory();

            // Only include the file or directory if it matches the include rules
            if (!minimatch(filePath, nodeInclude)) {
                return;
            }

            const fileNode: FileNode = {
                name: file.name,
                isDirectory,
                path: filePath, // Set the path of the file node to the filePath
                children: isDirectory ? [] : undefined
            };

            if (isDirectory) {
                fileNode.children = [];
                traverseDirectory(filePath, fileNode);
            }

            parentNode.children?.push(fileNode);
        });
    }

    traverseDirectory(directory, root);

    return root;
}

export function printDirectoryTree(directory: string): void {
    const root = getDirectoryTree(directory);

    function printNode(node: FileNode, prefix: string): void {
        console.log(`${prefix}${node.isDirectory ? "├── " : ""}${node.name}${node.isDirectory ? "/" : ""}`);

        const newPrefix = `${prefix}${node.isDirectory ? "│   " : "    "}`;

        node.children?.forEach((child, index, array) => {
            if (index === array.length - 1) {
                console.log(`${newPrefix}└── ${child.name}${child.isDirectory ? "/" : ""}`);
                if (child.isDirectory) {
                    printNode(child, `${prefix}    `);
                }
            } else {
                console.log(`${newPrefix}├── ${child.name}${child.isDirectory ? "/" : ""}`);
                if (child.isDirectory) {
                    printNode(child, `${prefix}│   `);
                }
            }
        });
    }

    printNode(root, "");
}

export function getFileContent(path: string): string {
    const fileContent = fs.readFileSync(path, 'utf-8');
    return fileContent;
}