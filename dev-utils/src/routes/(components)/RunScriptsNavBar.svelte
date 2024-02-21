<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import { Cat, Loader } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	let scripts = [
		{ directoryName: 'sveltekit', scriptNames: ['types-strapi', 'types-openapi', 'types-all'] },
		{ directoryName: 'strapi', scriptNames: ['types-strapi', 'types-openapi', 'types-all'] }
	];

	// Define loadingStates with a type that allows string keys and boolean values
	let loadingStates: Record<string, boolean> = {};

	async function runScript(directory: string, scriptName: string) {
		const key = `${directory}/${scriptName}`;
		loadingStates[key] = true;

		try {
			const response = await fetch('/api/npm-scripts', {
				method: 'POST',
				body: JSON.stringify({ directory, scriptName }),
				headers: {
					'content-type': 'application/json'
				}
			});
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			toast('Types have been created', {
				description: `${scriptName} for ${directory} have been created`
				// action: {
				// 	label: 'Undo',
				// 	onClick: () => console.log('Undo')
				// }
			});
			const data = await response.json();
		} catch (e) {
			toast('${scriptName} for ${directory} have not been created.', {
				description: `Check your ${directory} console to see the error.`
			});
			console.error('An error occurred:', e);
			// Here, you should add your error message UI logic
		} finally {
			loadingStates[key] = false;
		}
	}
</script>

<Menubar.Root>
	<!-- <div class="flex items-center">
		<div class="px-2.5">
			<p>Types Generation</p>
		</div>
		<Cat class="size-6" />
	</div> -->
	{#each scripts as script}
		<Menubar.Menu closeOnItemClick={false}>
			<Menubar.Trigger>Types for {script.directoryName}</Menubar.Trigger>
			<Menubar.Content>
				{#each script.scriptNames as scriptName}
					<Menubar.Item on:click={() => runScript(script.directoryName, scriptName)}>
						{#if loadingStates[`${script.directoryName}/${scriptName}`]}
							<Loader class="animate-spin" size="16" /> <!-- Adjust the size as needed -->
						{:else}
							Run {scriptName}
						{/if}
					</Menubar.Item>
				{/each}
			</Menubar.Content>
		</Menubar.Menu>
	{/each}
</Menubar.Root>
