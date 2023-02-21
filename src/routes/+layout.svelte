<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div>
	<Header />
	<slot />
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-zinc-900;
		@apply md:px-6;
	}
</style>
