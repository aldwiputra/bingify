<script lang="ts">
	import type { PageData } from './$types';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import MovieListContainer from '$lib/components/MovieListContainer.svelte';
	import MovieCard from '$lib/components/MovieCard.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Bingify | Home</title>
</svelte:head>

<HeroSection mainMovie={data.mainMovie} />
<MovieListContainer title="Top Rated Movies">
	{#each data.topRatedMovies as movieItem}
		<MovieCard data={movieItem} />
	{/each}
</MovieListContainer>
<MovieListContainer title="Top Rated Movies">
	{#each data.topRatedMovies as movieItem}
		<MovieCard data={movieItem} />
	{/each}
</MovieListContainer>
<MovieListContainer title="Top Rated Movies">
	{#each data.topRatedMovies as movieItem}
		<MovieCard data={movieItem} />
	{/each}
</MovieListContainer>
