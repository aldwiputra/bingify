<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
		rel="stylesheet" />
</svelte:head>

<div
	class="mx-auto grid max-w-screen-xl auto-rows-auto grid-cols-1 md:gap-4 md:p-6 lg:grid-cols-10 lg:gap-7">
	<div class="h-full w-full self-start">
		<Header />
	</div>
	<main class="lg:col-start-2 lg:col-end-11 ">
		<slot />
	</main>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-gray-900;
	}
</style>
