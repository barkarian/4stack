<script lang="ts">
	import type { PageData } from './$types';
	import ConfigureAuth0Settings from './(components)/ConfigureAuth0Settings.svelte';
	import InitialAuthenticationSetup from './(components)/InitialAuthenticationSetup.svelte';
	import {
		auth0CallbackUrlToSet as auth0CallbackUrlToSetStore,
		auth0SettingsUrl as auth0SettingsUrlStore
	} from '$lib/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const { auth0CallbackUrlToSet, auth0SettingsUrl } = data;
	$auth0CallbackUrlToSetStore = auth0CallbackUrlToSet;
	$auth0SettingsUrlStore = auth0SettingsUrl;
</script>

<div class="flex h-full">
	{#if auth0CallbackUrlToSet && auth0SettingsUrl}
		<ConfigureAuth0Settings {auth0CallbackUrlToSet} {auth0SettingsUrl}></ConfigureAuth0Settings>
		<!-- <Button on:click={() => goto('/')}>Go to home page</Button> -->
	{:else}
		<InitialAuthenticationSetup></InitialAuthenticationSetup>
	{/if}
</div>
