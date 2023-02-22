<script lang="ts">
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let backgroundImgElement: HTMLElement;

	onMount(() => {
		backgroundImgElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1280/${data.mainMovie.backdrop_path})`;
	});
</script>

<svelte:head>
	<title>Bingify | Home</title>
</svelte:head>

<main class="mx-auto max-w-screen-2xl p-0 md:mt-4">
	<div class="grid grid-cols-1 grid-rows-1 overflow-hidden md:rounded-lg">
		<img
			class="saturate-20 col-span-full row-span-full h-full object-cover object-top opacity-20 blur-md md:rounded-md"
			src={`https://image.tmdb.org/t/p/w1280/${data.mainMovie.backdrop_path}`}
			alt="" />
		<article
			class="z-10 col-span-full row-span-full my-10 flex h-fit w-fit items-stretch gap-6 place-self-center">
			<img
				class="w-24 rounded-md"
				src={`https://image.tmdb.org/t/p/w185/${data.mainMovie.poster_path}`}
				alt="" />

			<div class="flex flex-col justify-between self-stretch">
				<h2
					class="max-w-[15ch] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold text-zinc-200">
					{data.mainMovie.title}
				</h2>
				<p class="text-sm font-semibold text-zinc-200">
					{`${data.mainMovie.release_date.split('-')[0]}   |   ${data.mainMovie.vote_average}`}
				</p>

				<p class="max-w-[20ch] text-sm leading-normal text-zinc-400 line-clamp-4">
					{data.mainMovie.overview}
				</p>
			</div>
		</article>
	</div>
</main>
