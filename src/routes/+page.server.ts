import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const movies = await fetch(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=292fec9af6d6ffa33d0b7b5c45e279e0`
	);
	const response = await movies.json();
	const randomNum = Math.floor(Math.random() * response.results.length);

	return {
		mainMovie: response.results[randomNum]
	};
}) satisfies PageServerLoad;
