<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte';
	import MovieListContainer from '$lib/components/MovieListContainer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Bingify | Movies</title>
</svelte:head>

<MovieListContainer title="Movies" wrap={true}>
	{#each data.movieData as movieItem}
		<MovieCard data={movieItem} />
	{/each}
</MovieListContainer>
