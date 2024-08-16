const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzVjNTFiYmQxYWI2MmJkMWI5MTBjMDU4YzI2Mjk4MiIsIm5iZiI6MTcyMzc2MjE4Mi41MDk1MTcsInN1YiI6IjY2YWMyOGNkNzEyYzRlNzA5ZDZjMjkwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wdh2hQ0yfY775Z_HLX-0RujYL97YfcjAnQkBJC-OWAg",
	},
};

export const listNames = {
	nowPlaying: "now_playing",
	popular: "popular",
	topRated: "top_rated",
};

export const getMoviesByListName = (ListName) => {
	fetch(
		`https://api.themoviedb.org/3/movie/${ListName}?language=pt-BR&page=1`,
		options
	)
		.then((res) => res.json())
		.then((res) => console.log(res.results));
};
