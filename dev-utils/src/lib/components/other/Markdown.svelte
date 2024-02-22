<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';

	export let mdString = ''; // Input Markdown string
	let htmlContent = ''; // Variable to store the generated HTML content

	// Convert Markdown to HTML when the component mounts or mdString changes
	onMount(async () => {
		// Use async here
		const result = marked.parse(mdString);
		// Check if marked.parse returns a promise and handle accordingly
		if (result instanceof Promise) {
			htmlContent = await result; // Await if it's a promise
		} else {
			htmlContent = result; // Directly assign if it's a string
		}
	});
</script>

<div class="scrollable-content">{@html htmlContent}</div>

<style>
	.scrollable-content {
		max-height: 50vh; /* Set the max-height to half of the viewport height */
		overflow-y: auto; /* Enable vertical scrolling */
		padding: 10px; /* Optional: Add some padding for better readability */
		border: 1px solid #ccc; /* Optional: Add a border for visual structure */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
	}
</style>
