<script lang="ts">
	import '../app.pcss';
	import { goto } from '$app/navigation';
	import { PUBLIC_STRAPI_DOMAIN } from '$env/static/public';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Sun, Moon, LogOut } from 'lucide-svelte';
	import { userInfo } from '$lib/stores';
	import { onMount } from 'svelte';
	import { PWA_VARIABLES } from '$lib/config/styles';
	onMount(() => {
		if (!$userInfo) {
			//check if local storage has user info
			const clientSideUserInfo = localStorage.getItem('clientSideUserInfo');
			if (clientSideUserInfo) {
				$userInfo = JSON.parse(clientSideUserInfo);
			}
		}
	});
</script>

<!-- NAVBAR -->
<div class="border-b" style={PWA_VARIABLES.pwaNavbarStyle}>
	<ModeWatcher></ModeWatcher>
	<div class="flex h-16 items-center px-4">
		{#if $userInfo}
			<Button variant="outline" on:click={() => goto('/auth/signout')}
				>Logout<LogOut></LogOut></Button
			>
		{:else}
			<Button variant="default" href={`${PUBLIC_STRAPI_DOMAIN}/api/connect/auth0`}>
				Login or Register with Auth0
			</Button>
		{/if}
		<div class="ml-auto flex items-center space-x-4">
			<Button on:click={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>
</div>

<slot style={PWA_VARIABLES.pwaBodyStyle} />

<div style={PWA_VARIABLES.pwaFooterStyle}>footer</div>
