<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { onMount } from 'svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Clipboard } from 'lucide-svelte'; // Import the Clipboard icon
	import { toast } from 'svelte-sonner';
	import Markdown from '$lib/components/other/Markdown.svelte';

	let contexts: AiContextFile[] = [];
	type AiContextFile = {
		contextName: string;
		content: string;
	};

	const openModal = async () => {
		const res = await fetch('/api/fetch-ai-context');
		const data = await res.json();
		contexts = data.contexts;
	};

	// Function to copy content to the clipboard
	async function copyToClipboard(content: string) {
		try {
			await navigator.clipboard.writeText(content);
			toast('Copied', {
				description: `Text have been copied to clipboard.`,
				action: {
					label: 'Close',
					onClick: () => console.log('Close notification')
				}
			});
		} catch (err) {
			alert('Failed to copy content');
			console.error('Error copying to clipboard: ', err);
		}
	}
</script>

<Dialog.Root>
	<Dialog.Trigger on:click={() => openModal()} class={buttonVariants({ variant: 'outline' })}
		>Ai Context</Dialog.Trigger
	>
	<Dialog.Content class="sm:max-w-[1000px]">
		<Dialog.Header>
			<Dialog.Title>Ai Context</Dialog.Title>
			<Dialog.Description>
				<p>Core are setup by the system ...</p>
				<p>
					Other fixed contexts can be setup by the user inside /dev-utils/src/lib/ai-context/(new
					Context directory)
				</p>
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<Accordion.Root>
				{#each contexts as item}
					<Accordion.Item value={item.contextName}>
						<button on:click={() => copyToClipboard(item.content)} class="ml-2">
							<Clipboard size="16" />
						</button>
						<Accordion.Trigger>{item.contextName}</Accordion.Trigger>
						<Accordion.Content>
							<!-- {item.content} -->
							<Markdown mdString={item.content}></Markdown>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
