import { useEffect, useState } from "react";
import MovieItem from "../../components/MovieItem";
import { CardContainer, LoaderContainer } from "./styles";
import PropTypes from "prop-types";
import { getMoviesByListName } from "../../services/moviesApi";
import LoadingItem from "../../components/LoadingItem";

const MovieList = ({ title, listName }) => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovies = async () => {
			await getMoviesByListName(listName).then(({ results }) => {
				setIsLoading(false);
				setMovies(results);
			});
		};

		fetchMovies();
	}, [listName]);

	return (
		<section>
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
							key={item.title}
						/>
					))}
				</CardContainer>
			)}
		</section>
	);
};

MovieList.propTypes = {
	title: PropTypes.string,
	listName: PropTypes.string,
};

export default MovieList;
