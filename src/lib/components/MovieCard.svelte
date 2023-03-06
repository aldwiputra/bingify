<script lang="ts">
	import type { Movie, TvShow } from '$lib/types/global';
	import { onMount } from 'svelte';

	export let data: Movie | TvShow;
	export let grow: boolean;
	let isBookmarked: boolean;
	const event = new Event(`${data.id}Change`);

	function isMovie(obj: Movie | TvShow): obj is Movie {
		return 'title' in obj && 'adult' in obj && 'release_date' in obj;
	}

	function bookmarkHandler(id: string) {
		if (isBookmarked) {
			window.localStorage.removeItem(id);
			document.dispatchEvent(event);
			return;
		}

		window.localStorage.setItem(id, JSON.stringify(data));
		document.dispatchEvent(event);
	}

	function updateLocalStorageListener(id: string) {
		return () => {
			isBookmarked = window.localStorage.getItem(id) ? true : false;
			console.log('updated');
		};
	}

	onMount(() => {
		updateLocalStorageListener(data.id.toString())();

		document.addEventListener(`${data.id}Change`, updateLocalStorageListener(data.id.toString()));

		return () => {
			document.removeEventListener(
				`${data.id}Change`,
				updateLocalStorageListener(data.id.toString())
			);
		};
	});
</script>

<article class={`${grow ? 'flex-1' : ''} pt-2 pl-2 pr-2`}>
	<div
		class="relative block overflow-hidden rounded-md outline-2 outline-offset-4 outline-gray-400 hover:outline">
		<img
			class="aspect-[185/278] w-full min-w-[7.5rem] sm:min-w-[8rem] md:min-w-[10rem] lg:min-w-[11rem]"
			src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
			loading="lazy"
			alt="" />

		<!-- image placeholder -->
		<div
			class="absolute top-0 left-0 right-0 z-[-1] aspect-[185/278] w-full bg-gradient-to-br from-gray-400 to-gray-600" />
		<!-- ----------------- -->

		<button
			class="pointer-events-auto absolute top-2 right-2 aspect-square h-7 w-7 cursor-pointer rounded-full bg-gray-800/70 p-[8px] backdrop-blur-sm md:h-8 md:w-8 md:p-[10px]"
			on:click={() => {
				bookmarkHandler(data.id.toString());
			}}>
			<svg viewBox="0 0 72 85" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					class={`stroke-gray-200 ${isBookmarked ? 'fill-gray-200' : ''}`}
					d="M66.032 3.71924L66.0797 3.73966L66.1279 3.75866C66.7404 3.99994 67.1533 4.33817 67.4683 4.79041C67.7865 5.24739 67.9286 5.70308 67.9286 6.25V78.1808C67.9286 78.7277 67.7865 79.1834 67.4683 79.6404C67.1533 80.0926 66.7404 80.4309 66.1279 80.6721L66.09 80.6871L66.0525 80.7029C65.8567 80.7853 65.5158 80.875 64.9554 80.875C64.0451 80.875 63.3537 80.6068 62.7131 80.0314L38.1401 56.4055L35.7143 54.0733L33.2885 56.4055L8.71317 80.0336C8.00079 80.6771 7.29878 80.9308 6.47321 80.9308C6.08829 80.9308 5.73917 80.8584 5.39657 80.7116L5.34893 80.6911L5.30069 80.6721C4.68822 80.4309 4.27524 80.0926 3.96029 79.6404C3.64204 79.1834 3.5 78.7277 3.5 78.1808V6.25C3.5 5.70308 3.64204 5.24739 3.96029 4.79041C4.27524 4.33817 4.68822 3.99994 5.30069 3.75866L5.34893 3.73966L5.39657 3.71924C5.73917 3.57241 6.08829 3.5 6.47321 3.5H64.9554C65.3403 3.5 65.6894 3.57241 66.032 3.71924Z"
					stroke-width="7" />
			</svg>
		</button>

		<!-- <span
			class="outline-solid absolute top-2 left-2 flex items-center gap-1 rounded-[4px] bg-gray-800/80 p-1.5 outline outline-1 outline-gray-500/50 backdrop-blur-sm md:rounded-md md:p-2">
			<svg class="w-2 md:w-2.5" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M17.6533 1.43995C18.3365 -0.202639 20.6634 -0.202638 21.3466 1.43995L25.2467 10.8168C25.5347 11.5093 26.1859 11.9824 26.9335 12.0424L37.0566 12.8539C38.8299 12.9961 39.549 15.2091 38.1979 16.3664L30.4851 22.9732C29.9156 23.4611 29.6668 24.2267 29.8408 24.9562L32.1972 34.8346C32.61 36.5651 30.7275 37.9328 29.2093 37.0055L20.5425 31.7119C19.9025 31.3209 19.0975 31.3209 18.4575 31.7119L9.79067 37.0055C8.27247 37.9328 6.38997 36.5651 6.80274 34.8346L9.15911 24.9562C9.33313 24.2267 9.08438 23.4611 8.51481 22.9732L0.80206 16.3664C-0.549014 15.2091 0.170037 12.9961 1.94335 12.8539L12.0665 12.0424C12.814 11.9824 13.4653 11.5093 13.7533 10.8168L17.6533 1.43995Z"
					class="fill-amber-400" />
			</svg>
			<span
				class="block text-[10px] font-normal leading-none tracking-wide text-gray-200 md:text-[11px]">
				{data.vote_average}
			</span>
		</span> -->
	</div>

	<a href="#" class="group" title={isMovie(data) ? data.title : data.name}>
		<h4
			class="mt-2 max-w-[15ch] text-sm font-semibold tracking-wide text-gray-200 line-clamp-1 group-hover:text-sky-500 md:mt-3 lg:text-base">
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
