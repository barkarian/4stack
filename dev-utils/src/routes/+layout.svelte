<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Sun, Moon } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import RunScriptsNavBar from './(components)/RunScriptsNavBar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import TunnelModal from './(components)/TunnelModal.svelte';
	import AiContextModal from './(components)/AiContextModal.svelte';
</script>

<Toaster />
<ModeWatcher></ModeWatcher>
<div class="flex items-center justify-between">
	<div>
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
		<TunnelModal></TunnelModal>
		<AiContextModal></AiContextModal>
	</div>
	<div class="flex items-center justify-between">
		<RunScriptsNavBar></RunScriptsNavBar>
	</div>
</div>

<slot />
