<script lang="ts">
	import { goto } from '$app/navigation';

	import Button from '$lib/components/ui/button/button.svelte';
</script>

<Button on:click={() => goto('/setup-ngrok')}>Setup Ngrok</Button>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
