<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Bingify | Home</title>
</svelte:head>

<main class="mx-auto max-w-screen-2xl p-0 md:mt-4">
	<div class="grid max-h-[30rem] grid-cols-1 grid-rows-1 overflow-hidden md:rounded-lg">
		<img
			class="col-span-full row-span-full h-full object-cover object-top opacity-[.20] blur-md saturate-50 md:w-full md:rounded-md"
			src={`https://image.tmdb.org/t/p/w1280/${data.mainMovie.backdrop_path}`}
			alt="" />

		<article
			class="z-10 col-span-full row-span-full my-10 mx-4 flex h-fit w-fit items-stretch gap-4 place-self-center md:gap-6">
			<img
				class="w-28 rounded-md sm:w-40"
				src={`https://image.tmdb.org/t/p/w185/${data.mainMovie.poster_path}`}
				alt="" />

			<div class=" flex flex-col justify-between self-stretch">
				<span
					class="border-1 flex w-fit items-center gap-1 rounded-full border border-solid border-sky-500 bg-sky-500/10 px-3 py-1  text-sky-500">
					<svg
						class="mr-1 w-1.5 align-middle"
						viewBox="0 0 24 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							class="fill-sky-500"
							d="M23.04 11.4062C24.32 12.1145 24.32 13.8855 23.04 14.5938L2.88 25.7507C1.6 26.4591 0 25.5736 0 24.1568V1.84315C0 0.426403 1.6 -0.459058 2.88 0.249313L23.04 11.4062Z" />
					</svg>
					<span class="text-[10px] font-medium leading-snug sm:text-sm"> In theaters </span>
				</span>

				<h2
					class="text-md mt-2 max-w-[15ch] overflow-hidden text-ellipsis whitespace-nowrap font-extrabold text-zinc-200 sm:text-2xl md:max-w-[22ch]">
					{data.mainMovie.title}
				</h2>

				<div
					class="mt-2 flex items-center gap-3 text-xs font-bold text-zinc-200 sm:gap-4 sm:text-sm">
					<p>
						{data.mainMovie.release_date.split('-')[0]}
					</p>
					<span
						class="rounded-md bg-zinc-200 py-0.5 px-1.5 text-[10px] text-zinc-900 sm:text-[11px]">
						{data.mainMovie.adult ? 'R' : 'PG-13'}
					</span>
					<span class="flex items-center gap-1">
						<svg class="w-3" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M17.6533 1.43995C18.3365 -0.202639 20.6634 -0.202638 21.3466 1.43995L25.2467 10.8168C25.5347 11.5093 26.1859 11.9824 26.9335 12.0424L37.0566 12.8539C38.8299 12.9961 39.549 15.2091 38.1979 16.3664L30.4851 22.9732C29.9156 23.4611 29.6668 24.2267 29.8408 24.9562L32.1972 34.8346C32.61 36.5651 30.7275 37.9328 29.2093 37.0055L20.5425 31.7119C19.9025 31.3209 19.0975 31.3209 18.4575 31.7119L9.79067 37.0055C8.27247 37.9328 6.38997 36.5651 6.80274 34.8346L9.15911 24.9562C9.33313 24.2267 9.08438 23.4611 8.51481 22.9732L0.80206 16.3664C-0.549014 15.2091 0.170037 12.9961 1.94335 12.8539L12.0665 12.0424C12.814 11.9824 13.4653 11.5093 13.7533 10.8168L17.6533 1.43995Z"
								class="fill-amber-400" />
						</svg>
						<span class="font-semibold leading-none">
							{data.mainMovie.vote_average}
						</span>
					</span>
				</div>

				<p
					class="mt-2 max-w-[20ch] text-xs leading-normal text-gray-400 line-clamp-4 sm:max-w-[22ch] sm:text-base sm:line-clamp-5  md:max-w-[28ch]">
					{data.mainMovie.overview}
				</p>
			</div>
		</article>
	</div>
</main>
