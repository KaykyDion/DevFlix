import { ThemeProvider } from "styled-components";
import { getMoviesByListName, listNames } from "./services/moviesApi";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./globalStyle";

function App() {
	getMoviesByListName(listNames.popular);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<h1>Olá mundo</h1>
		</ThemeProvider>
	);
}

export default App;
