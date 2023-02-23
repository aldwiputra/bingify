import 'dotenv/config';
import type { PageServerLoad } from './$types';
import type { Movie } from '$lib/types/global';

export const load = (async ({ fetch }) => {
	async function fetchNowPlayingMovies(): Promise<Movie> {
		const movies = await fetch(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&page=1`
		);
		const response = await movies.json();
		const randomNum = Math.floor(Math.random() * response.results.length);

		return response.results[randomNum];
	}

	async function fetchTopRatedMovies(): Promise<Movie[]> {
		const movies = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&page=1`
		);
		const response = await movies.json();

		return response.results;
	}

	async function fetchPopularMovies(): Promise<Movie[]> {
		const movies = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=1`
		);
		const response = await movies.json();

		return response.results;
	}

	async function fetchUpcomingMovies(): Promise<Movie[]> {
		const movies = await fetch(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&page=1`
		);
		const response = await movies.json();

		return response.results;
	}

	return {
		mainMovie: fetchNowPlayingMovies(),
		topRatedMovies: fetchTopRatedMovies(),
		popularMovies: fetchPopularMovies(),
		upcomingMovies: fetchUpcomingMovies()
	};
}) satisfies PageServerLoad;
