import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../services/moviesApi';
import MovieItem from "../../components/MovieItem";
import { MoviesGrid } from './styles';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovies(`search/movie?query=${query}&include_adult=false&language=pt-BR&page=1`);
        setMovies(response.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (movies.length === 0) {
    return <p>Nenhum filme encontrado para "{query}".</p>;
  }

  return (
    <div>
      <h1>Resultados da pesquisa para "{query}"</h1>
      <MoviesGrid> {}
        {movies.map(movie => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            cardImg={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          />
        ))}
      </MoviesGrid>
    </div>
  );
};

export default SearchResults;