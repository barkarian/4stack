<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth0CallbackUrlToSet, auth0SettingsUrl } from '$lib/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { isSetupCompleted } = data;
</script>

{#if isSetupCompleted}
	<p>
		It's time you spin up the dev-utils we open an ngrok tunnel for your strapi backend and we will
		configure your enviroment variables accordingly!
	</p>
	<p>This is important for authentication to work in your development enviroment</p>
	{#if !$auth0CallbackUrlToSet || !auth0CallbackUrlToSet}
		<Button on:click={() => goto('/setup-ngrok')}>Setup Ngrok in order to proceed 🔧</Button>
	{:else}
		<p>Tunnel is open... 🚀</p>
	{/if}
{:else}
	<p>Enviroment variables have been generated</p>
	<p>Follow readme instructions and Add /dev-utils/.env auth0 variable</p>
	<p>After that refresh the page!</p>
{/if}
