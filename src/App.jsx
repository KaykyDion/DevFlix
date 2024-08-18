
import { ThemeProvider } from "styled-components";
import { getMoviesByListName, listNames } from "./services/moviesApi";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";

function App() {
	getMoviesByListName(listNames.popular);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
      <Header />
			<h1>Olá mundo</h1>
		</ThemeProvider>
	);
}

export default App;