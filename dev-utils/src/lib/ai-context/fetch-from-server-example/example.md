#### Showcasing how you should fetch from frontend to server in sveltekit
*src/routes/add/+page.svelte*
```src/routes/add/+page.svelte
<script lang="ts">
	let a = 0;
	let b = 0;
	let total = 0;
	
	async function add() {
		const response = await fetch('/api/add', {
			method: 'POST',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json',
			},
		});
	
		total = await response.json();
	}
</script>

<input type="number" bind:value={a}> +
<input type="number" bind:value={b}> =
{total}
<button on:click={add}>Calculate</button>
```


*src/routes/api/add/+server.ts*
```src/routes/api/add/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { a, b } = await request.json();
	return json(a + b);
};
```