import MovieList from "../../containers/MovieList";
import { listNames } from "../../services/moviesApi";
import Nav from "../../components/Nav";

const Home = () => {
	return (
		<>
			<Nav />
			<main className="container">
				<MovieList
					id="popular"
					title="Populares"
					listName={listNames.popular}
				/>
				<MovieList
					id="topRated"
					title="Maiores Notas"
					listName={listNames.topRated}
				/>
				<MovieList
					id="nowPlaying"
					title="Lançamentos"
					listName={listNames.nowPlaying}
				/>
				<MovieList
					id="upcoming"
					title="Em Breve"
					listName={listNames.upcoming}
				/>
			</main>
		</>
	);
};

export default Home;
