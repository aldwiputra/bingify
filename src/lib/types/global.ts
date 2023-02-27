export type MovieData = {
	dates: Dates;
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};

export type Dates = {
	maximum: Date;
	minimum: Date;
};

export type Movie = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: OriginalLanguage;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type TvShowData = {
	page: number;
	results: TvShow[];
	total_pages: number;
	total_results: number;
};

export type TvShow = {
	backdrop_path: string;
	first_air_date: string;
	genre_ids: number[];
	id: number;
	name: string;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
};

export type OriginalLanguage = 'en' | 'ru' | 'no';
