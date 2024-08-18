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
			<GlobalStyle />
			<div className="container">
				<Header />
				<MovieItem title="Twisters" cardImg="https://placehold.co/180x220" />
			</div>
		</ThemeProvider>
	);
}

export default App;
