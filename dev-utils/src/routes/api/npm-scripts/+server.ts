import { rootDirectory } from '$lib/utils/pathUtils.js';
import { runNpmScript } from '$lib/utils/runNpmScript.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { directory, scriptName } = await request.json();
    console.log({
        projectDirectory: `${rootDirectory}/${directory}`,
        scriptName: `${scriptName}`
    })
    runNpmScript(`${rootDirectory}/${directory}`, `${scriptName}`)
    return json("ok");
}