<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';

	export let auth0SettingsUrl: string;
	export let auth0CallbackUrlToSet: string;

	function copyToClipboard(text: string) {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				toast('Copied', {
					description: `Text have been copied to clipboard.`
					// action: {
					// 	label: 'Undo',
					// 	onClick: () => console.log('Undo')
					// }
				});
				console.log('Text copied to clipboard');
			})
			.catch((error) => {
				console.error('Failed to copy text to clipboard:', error);
				toast('Something went wrong', {
					description: `Text have not been copied to clipboard.`

					// action: {
					// 	label: 'Undo',
					// 	onClick: () => console.log('Undo')
					// }
				});
			});
	}
</script>

<!-- {JSON.stringify(data)} -->

<div class="w-full bg-white p-8 dark:bg-gray-800">
	<div class="flex flex-col items-center justify-center">
		<h1 class="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Setup the tunnel</h1>
		<div class="mt-8 w-full max-w-md">
			<h2 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">Tunnel is open 🚀 ...</h2>
			<div class="flex items-center space-x-2">
				<p class="mb-1 text-sm text-gray-900 dark:text-white">
					Setup the new tunnel before you continue !
				</p>
				<!-- <Loader></Loader> -->
			</div>
			<div class="space-y-4">
				<div class="flex items-center justify-between rounded-md bg-gray-100 p-4 dark:bg-gray-700">
					<div>
						<p class="mb-1 text-sm text-gray-900 dark:text-white">Copy new tunnel Callback url</p>
						<p class="text-xs text-gray-500">{auth0CallbackUrlToSet}</p>
					</div>
					<Button
						size="sm"
						variant="ghost"
						on:click={() => copyToClipboard(auth0CallbackUrlToSet ?? '')}>Copy</Button
					>
				</div>
				<div class="flex items-center justify-between rounded-md bg-gray-100 p-4 dark:bg-gray-700">
					<div>
						<p class="mb-1 text-sm text-gray-900 dark:text-white">Update your Auth0 Settings</p>
						<p class="text-xs text-gray-500">Set *callback urls* to the value you just copied</p>
					</div>

					<Button on:click={() => window.open(auth0SettingsUrl, '_blank')} size="sm" variant="ghost"
						>Auth0 Settings</Button
					>
				</div>
				<div class="flex items-center justify-between rounded-md bg-gray-100 p-4 dark:bg-gray-700">
					<div>
						<p class="mb-1 text-sm text-gray-900 dark:text-white">From root folder</p>
						<p class="text-xs text-gray-500">cd strapi && yarn dev</p>
						<p class="text-xs text-gray-500">cd sveltekit && yarn dev</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
