import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import MovieList from "./containers/MovieList";
import { listNames } from "./services/moviesApi";
import Footer from "./components/Footer";

function App() {

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<GlobalStyle />
			<main className="container">
				<MovieList id="popular" title="Populares" listName={listNames.popular} />
				<MovieList id="topRated" title="Maiores Notas" listName={listNames.topRated} />
				<MovieList id="nowPlaying" title="Lançamentos" listName={listNames.nowPlaying} />
				<MovieList id="upcoming" title="Em Breve" listName={listNames.upcoming} />
			</main>
			<Footer />
		</ThemeProvider>
	);
}

export default App;