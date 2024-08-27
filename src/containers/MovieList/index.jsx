import { useEffect, useState } from "react";
import MovieItem from "../../components/MovieItem";
import { CardContainer, LoaderContainer } from "./styles";
import PropTypes from "prop-types";
import { getMoviesByListName } from "../../services/moviesApi";
import LoadingItem from "../../components/LoadingItem";

const MovieList = ({ id, title, listName, movieList }) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (listName) {
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
		} else {
			setMovies(movieList);
			setIsLoading(false);
		}
	}, [listName, movieList]);

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
							cardImg={item.poster_path}
							id={item.id}
							key={item.id}
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
	listName: PropTypes.string,
	movieList: PropTypes.array,
};

export default MovieList;
