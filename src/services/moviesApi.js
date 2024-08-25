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

export const getMoviesByListName = (ListName) => {
	return fetch(
		`https://api.themoviedb.org/3/movie/${ListName}?language=pt-BR&page=1`,
		options
	).then((res) => res.json());
};

export const getMovieById = (movieId) => {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`,
		options
	).then((response) => response.json());
};
