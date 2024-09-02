import { getMovieById } from "../services/moviesApi";

export default async function loadMovie({ params }) {
	try {
		return await getMovieById(params.movieId);
	} catch (error) {
		throw new Response(error.message, { status: 404 });
	}
}
