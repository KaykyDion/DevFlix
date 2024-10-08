const token = import.meta.env.VITE_TMDB_API_TOKEN;

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${token}`,
	},
};

export const listNames = {
	nowPlaying: "now_playing",
	popular: "popular",
	topRated: "top_rated",
	upcoming: "upcoming",
};

export const getMoviesByListName = async (ListName) => {
	return fetch(
		`https://api.themoviedb.org/3/movie/${ListName}?language=pt-BR&page=1`,
		options
	).then((res) => res.json());
};

export const getMovieById = async (movieId) => {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
		options
	).then((response) => response.json());
};

export const getSimilarMovies = async (movieId) => {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/similar?language=pt-BR&page=1`,
		options
	).then((response) => response.json());
};

export const getMovieTrailer = async (movieId) => {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/videos?language=pt-BR`,
		options
	).then((response) => response.json());
};

export const fetchMovies = async (endpoint) => {
	return fetch(`https://api.themoviedb.org/3/${endpoint}`, options).then(
		(res) => res.json()
	);
};
