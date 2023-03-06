<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte';
	import MovieListContainer from '$lib/components/MovieListContainer.svelte';
	import type { Movie, TvShow } from '$lib/types/global';
	import { onMount } from 'svelte';

	let data: Movie[] | TvShow[] = [];

	function updateData() {
		data = [];

		for (let i = 0; i < window.localStorage.length; i++) {
			let key = window.localStorage.key(i);

			if (key !== null) {
				data = [...data, JSON.parse(window.localStorage[key])];
			}
		}
	}

	function addListener() {
		data.forEach((dataItemObj) => {
			document.addEventListener(`${dataItemObj.id}Change`, updateData);
		});
	}

	function removeListener() {
		data.forEach((dataItemObj) => {
			document.removeEventListener(`${dataItemObj.id}Change`, updateData);
		});
	}

	onMount(() => {
		updateData();
		addListener();

		return () => {
			removeListener();
		};
	});
</script>

<svelte:head>
	<title>Bingify | Bookmarks</title>
</svelte:head>

<MovieListContainer title="Bookmarks" wrap={true}>
	{#each data as movieItem}
		<MovieCard data={movieItem} grow={false} />
	{/each}
</MovieListContainer>
