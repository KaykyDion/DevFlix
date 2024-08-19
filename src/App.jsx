import { ThemeProvider } from "styled-components";
import { getMoviesByListName, listNames } from "./services/moviesApi";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import MovieItem from "./components/MovieItem";

function App() {
	getMoviesByListName(listNames.popular);
	return (
		<ThemeProvider theme={theme}>
		<Header />
			<GlobalStyle />
			<main className="container">
				<MovieItem title="Twisters" cardImg="https://placehold.co/180x220" />
			</main>
		</ThemeProvider>
	);
}

export default App;
