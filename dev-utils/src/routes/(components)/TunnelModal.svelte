<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { auth0CallbackUrlToSet, auth0SettingsUrl } from '$lib/stores';
	import ConfigureAuth0Settings from '../setup-ngrok/(components)/ConfigureAuth0Settings.svelte';
	// import { Input } from '$lib/components/ui/input';
	// import { Label } from '$lib/components/ui/label';
</script>

{#if $auth0CallbackUrlToSet && $auth0SettingsUrl}
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}
			>Tunnel configuration</Dialog.Trigger
		>
		<Dialog.Content class="sm:max-w-[1000px]">
			<Dialog.Header>
				<Dialog.Title>Tunnel Configuration</Dialog.Title>
				<Dialog.Description>
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<ConfigureAuth0Settings
					auth0CallbackUrlToSet={$auth0CallbackUrlToSet}
					auth0SettingsUrl={$auth0SettingsUrl}
				></ConfigureAuth0Settings>
			</div>
			<Dialog.Footer>
				<Button type="submit">Save changes</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Button variant="secondary" on:click={() => goto('/setup-ngrok')}>Setup ngrok</Button>
{/if}
