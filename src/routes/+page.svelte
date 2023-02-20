<script lang="ts">
	import Logo from '../lib/Logo.svelte';
</script>

<div class="flex flex-col items-center p-8">
	<Logo />
	<h1 class="text-3xl font-bold text-gray-400">Welcome to SvelteKit</h1>
	<p>
		Visit <a class="text-purple-700 underline" href="https://kit.svelte.dev">kit.svelte.dev</a> to read
		the documentation
	</p>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-gray-800;
	}
</style>
