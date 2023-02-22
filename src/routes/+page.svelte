<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Bingify | Home</title>
</svelte:head>

<main class="p-0 md:mt-4">
	<img
		width="100%"
		class="md:rounded-md"
		src={`https://image.tmdb.org/t/p/w1280/${data.mainMovie.backdrop_path}`}
		alt="" />

	<h1 class="text-md font-semibold text-zinc-200">{data.mainMovie.title}</h1>
</main>

<style>
	img {
		-webkit-mask-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0) 3%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 0) 97%
		);
		mask-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0) 3%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 0) 97%
		);
	}
</style>
