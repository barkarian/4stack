<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { userInfo } from '$lib/stores';

	export let data: PageData;
	const { redirectUrlPath } = data;

	onMount(() => {
		$userInfo = undefined;
		localStorage.removeItem('clientSideUserInfo');
		goto(redirectUrlPath);
	});
</script>
