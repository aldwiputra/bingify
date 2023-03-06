<script lang="ts">
	import MovieCard from '$lib/components/MovieCard.svelte';
	import MovieListContainer from '$lib/components/MovieListContainer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Bingify | TV Shows</title>
</svelte:head>

<MovieListContainer title="Tv Shows" wrap={true}>
	{#each data.tvData as tvItem}
		<MovieCard data={tvItem} grow={true} />
	{/each}
</MovieListContainer>
