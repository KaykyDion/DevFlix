import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../../services/moviesApi";
import MovieItem from "../../components/MovieItem";
import LoadingItem from "../../components/LoadingItem";
import { LoaderContainer, MoviesGrid, Result } from "./styles";
import LoadMoreButton from "../../components/LoadMoreButton";
import { ButtonWrapper } from "../../components/LoadMoreButton/styles";

const SearchResults = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	const fetchData = async (pageNum) => {
		try {
			const response = await fetchMovies(
				`search/movie?query=${query}&include_adult=false&language=pt-BR&page=${pageNum}`
			);
			setMovies((prevMovies) =>
				pageNum === 1 ? response.results : [...prevMovies, ...response.results]
			);
			setHasMore(response.page < response.total_pages);
		} catch (error) {
			console.error("Erro ao buscar filmes:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (query) {
			setPage(1);
			setMovies([]);
			setHasMore(true);
			setLoading(true);
			fetchData(1);
		}
	}, [query]);

	useEffect(() => {
		if (query && page > 1) {
			fetchData(page);
		}
	}, [page]);

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	if (loading && page === 1) {
		return (
			<LoaderContainer>
				<LoadingItem />
			</LoaderContainer>
		);
	}

	if (movies.length === 0 && !loading) {
		return <p>Nenhum filme encontrado para &quot;{query}&quot;.</p>;
	}

	return (
		<div>
			<Result>Resultados da pesquisa para &quot;{query}&quot;</Result>
			<MoviesGrid>
				{movies.map((movie) => (
					<MovieItem
						key={movie.id}
						id={movie.id}
						title={movie.title}
						cardImg={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
					/>
				))}
			</MoviesGrid>
			{hasMore && !loading && (
				<ButtonWrapper>
					<LoadMoreButton onClick={handleLoadMore} />
				</ButtonWrapper>
			)}
		</div>
	);
};

export default SearchResults;
