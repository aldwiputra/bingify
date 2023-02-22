<script lang="ts">
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Bingify | Home</title>
</svelte:head>

<main class="mx-auto max-w-screen-2xl p-0 md:mt-4">
	<div class="grid grid-cols-1 grid-rows-1 overflow-hidden md:rounded-lg">
		<img
			class="saturate-20 col-span-full row-span-full h-full object-cover object-top opacity-[.15] blur-md md:rounded-md"
			src={`https://image.tmdb.org/t/p/w1280/${data.mainMovie.backdrop_path}`}
			alt="" />
		<article
			class="z-10 col-span-full row-span-full my-10 mx-4 flex h-fit w-fit items-stretch gap-4 place-self-center">
			<img
				class="w-28 rounded-md"
				src={`https://image.tmdb.org/t/p/w185/${data.mainMovie.poster_path}`}
				alt="" />

			<div class=" flex flex-col justify-between self-stretch">
				<span
					class="border-1 w-fit rounded-full border border-solid border-sky-500 bg-sky-500/10 px-3 py-1 text-[10px] font-medium leading-tight text-sky-500">
					<svg
						class="mr-1 inline-block w-1.5"
						viewBox="0 0 24 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							class="fill-sky-500"
							d="M23.04 11.4062C24.32 12.1145 24.32 13.8855 23.04 14.5938L2.88 25.7507C1.6 26.4591 0 25.5736 0 24.1568V1.84315C0 0.426403 1.6 -0.459058 2.88 0.249313L23.04 11.4062Z" />
					</svg>
					Now Playing</span>
				<h2
					class="mt-2 max-w-[15ch] overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold text-zinc-200">
					{data.mainMovie.title}
				</h2>
				<p class="mt-2 text-xs font-semibold text-zinc-200">
					{`${data.mainMovie.release_date.split('-')[0]}   |   ${data.mainMovie.vote_average}`}
				</p>

				<p class="mt-2 max-w-[20ch] text-sm leading-normal text-zinc-400 line-clamp-4">
					{data.mainMovie.overview}
				</p>
			</div>
		</article>
	</div>
</main>
