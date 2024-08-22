import { useEffect, useState } from "react";
import MovieItem from "../../components/MovieItem";
import { CardContainer, LoaderContainer } from "./styles";
import PropTypes from "prop-types";
import { getMoviesByListName } from "../../services/moviesApi";
import LoadingItem from "../../components/LoadingItem";

const MovieList = ({ id, title, listName }) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const { results } = await getMoviesByListName(listName);
				setMovies(results);
			} catch (error) {
				console.error("Failed to fetch movies:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMovies();
	}, [listName]);

	return (
		<section id={id}>
			<h2>{title}</h2>
			{isLoading ? (
				<LoaderContainer>
					<LoadingItem />
				</LoaderContainer>
			) : (
				<CardContainer>
					{movies.map((item) => (
						<MovieItem
							title={item.title}
							cardImg={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
							key={item.id}  // Preferível usar `id` ao invés de `title` como chave
						/>
					))}
				</CardContainer>
			)}
		</section>
	);
};

MovieList.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	listName: PropTypes.string.isRequired
};

export default MovieList;
