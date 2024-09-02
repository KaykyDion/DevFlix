import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getMovieTrailer, getSimilarMovies } from "../../services/moviesApi";
import LoadingItem from "../../components/LoadingItem";
import { LoaderContainer } from "./styles";
import MovieDetails from "../../components/MovieDetails";
import MovieList from "../../containers/MovieList";
import ErrorElement from "../../components/ErrorElement";

const MoviePage = () => {
	const movie = useLoaderData();
	const [similarMovies, setSimilarMovies] = useState();
	const [movieTrailer, setMovieTrailer] = useState();
	const [IsLoading, setIsLoading] = useState(true);
	window.scrollTo({ top: 0 });

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const similarMoviesResponse = await getSimilarMovies(movie.id);
				const trailer = await getMovieTrailer(movie.id);
				setMovieTrailer(trailer.results[0]);
				setSimilarMovies(similarMoviesResponse.results);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		};

		fetchMovie();
	}, [movie]);

	if (movie.success === false) {
		return <ErrorElement text="Ops... Filme não encontrado!" />;
	}

	return (
		<main className="container">
			{IsLoading ? (
				<LoaderContainer>
					<LoadingItem />
				</LoaderContainer>
			) : (
				<>
					<MovieDetails
						backDropImg={movie.backdrop_path}
						overview={movie.overview}
						runtime={movie.runtime}
						posterImg={movie.poster_path}
						genres={movie.genres}
						title={movie.title}
						releaseDate={movie.release_date}
						voteAverage={movie.vote_average}
						trailer={movieTrailer}
					/>
					<MovieList
						title="Similares"
						movieList={similarMovies}
						id="similars"
					/>
				</>
			)}
		</main>
	);
};

export default MoviePage;
