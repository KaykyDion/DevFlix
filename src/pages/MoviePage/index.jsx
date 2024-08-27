import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getSimilarMovies } from "../../services/moviesApi";
import LoadingItem from "../../components/LoadingItem";
import { LoaderContainer } from "./styles";
import MovieDetails from "../../components/MovieDetails";
import MovieList from "../../containers/MovieList";

const MoviePage = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState({});
	const [similarMovies, setSimilarMovies] = useState({});
	const [IsLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await getMovieById(movieId);
				const { results } = await getSimilarMovies(movieId);
				setMovie(response);
				setSimilarMovies(results);
				setIsLoading(false);
			} catch (error) {
				console.log(`Failed to fetch movie:`, movieId);
			}
		};

		fetchMovie();
	}, [movieId]);

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
					/>
					<MovieList
						title="Relacionados"
						movieList={similarMovies}
						id="similars"
					/>
				</>
			)}
		</main>
	);
};

export default MoviePage;
