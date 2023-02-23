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

export type OriginalLanguage = 'en' | 'ru' | 'no';
