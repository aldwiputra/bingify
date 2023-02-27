import type { TvShow } from '$lib/types/global';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	async function fetchPopularTvShows(): Promise<TvShow[]> {
		const movies = await fetch(
			`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&page=1`
		);
		const response = await movies.json();

		return response.results;
	}

	return { tvData: fetchPopularTvShows() };
}) satisfies PageServerLoad;
