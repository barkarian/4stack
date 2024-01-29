<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { userInfo } from '$lib/stores';

	export let data: PageData;
	const { userInfoStoreData, successRedirectUrlPath } = data;

	onMount(() => {
		$userInfo = userInfoStoreData;
		localStorage.setItem('clientSideUserInfo', JSON.stringify(userInfoStoreData));
		goto(successRedirectUrlPath);
	});
</script>

<!-- MAYBE ADD A SPINNER HERE??? -->
