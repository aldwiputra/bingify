import type { Movie } from '$lib/types/global';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	async function fetchPopularMovies(): Promise<Movie[]> {
		const movies = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=1`
		);
		const response = await movies.json();

		return response.results;
	}

	return { movieData: fetchPopularMovies() };
}) satisfies PageServerLoad;
