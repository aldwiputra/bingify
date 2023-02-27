<script lang="ts">
	import type { Movie, TvShow } from '$lib/types/global';

	function isMovie(obj: Movie | TvShow): obj is Movie {
		return 'title' in obj && 'adult' in obj && 'release_date' in obj;
	}

	export let data: Movie | TvShow;
</script>

<article class="flex-1 pt-2 pl-2 pr-2">
	<a
		href="#"
		class="relative block overflow-hidden rounded-md outline-2 outline-offset-4 outline-gray-400 hover:outline">
		<img
			class="w-full min-w-[7.5rem] sm:min-w-[8rem] md:min-w-[10rem] lg:min-w-[11rem]"
			src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
			alt="" />

		<span
			class="outline-solid absolute top-2 right-2 flex items-center gap-1 rounded-[4px] bg-gray-800/80 p-1.5 outline outline-1 outline-gray-500/50 backdrop-blur-sm md:rounded-md md:p-2">
			<svg class="w-2 md:w-2.5" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M17.6533 1.43995C18.3365 -0.202639 20.6634 -0.202638 21.3466 1.43995L25.2467 10.8168C25.5347 11.5093 26.1859 11.9824 26.9335 12.0424L37.0566 12.8539C38.8299 12.9961 39.549 15.2091 38.1979 16.3664L30.4851 22.9732C29.9156 23.4611 29.6668 24.2267 29.8408 24.9562L32.1972 34.8346C32.61 36.5651 30.7275 37.9328 29.2093 37.0055L20.5425 31.7119C19.9025 31.3209 19.0975 31.3209 18.4575 31.7119L9.79067 37.0055C8.27247 37.9328 6.38997 36.5651 6.80274 34.8346L9.15911 24.9562C9.33313 24.2267 9.08438 23.4611 8.51481 22.9732L0.80206 16.3664C-0.549014 15.2091 0.170037 12.9961 1.94335 12.8539L12.0665 12.0424C12.814 11.9824 13.4653 11.5093 13.7533 10.8168L17.6533 1.43995Z"
					class="fill-amber-400" />
			</svg>
			<span
				class="block text-[10px] font-normal leading-none tracking-wide text-gray-200 md:text-[11px]">
				{data.vote_average}
			</span>
		</span>
	</a>

	<a href="#" class="group" title={isMovie(data) ? data.title : data.name}>
		<h4
			class="mt-2 text-sm font-semibold tracking-wide text-gray-200 line-clamp-1 group-hover:text-sky-500 md:mt-3 lg:text-base">
			{isMovie(data) ? data.title : data.name}
		</h4>
	</a>
	<div
		class="mt-1 flex items-center gap-1 text-[10px] font-thin tracking-wide text-gray-200 sm:gap-1.5 sm:text-[11px] lg:text-xs">
		<p>
			{#if isMovie(data)}
				{data.adult ? 'R' : 'PG-13'}
			{:else}
				N/A
			{/if}
		</p>
		<span>•</span>
		<p class="tracking-wide">
			{#if isMovie(data)}
				({data.release_date.split('-')[0]})
			{:else}
				({data.first_air_date.split('-')[0]})
			{/if}
		</p>
	</div>
</article>
