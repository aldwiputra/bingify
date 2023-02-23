<script lang="ts">
	import type { Movie } from '$lib/types/global';

	export let data: Movie;
</script>

<article>
	<img
		class="min-w-[7rem] rounded-md sm:min-w-[8rem] md:min-w-[9rem]"
		src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
		alt="" />
	<!-- <h3>{data.title}</h3> -->
</article>
