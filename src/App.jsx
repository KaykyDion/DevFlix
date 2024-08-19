import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import MovieList from "./containers/MovieList";
import { listNames } from "./services/moviesApi";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div className="container">
				<Header />
				<MovieList title="Populares" listName={listNames.popular} />
				<MovieList title="Maiores Notas" listName={listNames.topRated} />
				<MovieList title="Lançamentos" listName={listNames.nowPlaying} />
				<MovieList title="Em Breve" listName={listNames.upcoming} />
			</div>
		</ThemeProvider>
	);
}

export default App;
