import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import MovieList from "./containers/MovieList";
import { listNames } from "./services/moviesApi";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <GlobalStyle />
            <main className="container">
                <div id="popular">
                    <MovieList title="Populares" listName={listNames.popular} />
                </div>
                <div id="topRated">
                    <MovieList title="Maiores Notas" listName={listNames.topRated} />
                </div>
                <div id="nowPlaying">
                    <MovieList title="Lançamentos" listName={listNames.nowPlaying} />
                </div>
                <div id="upcoming">
                    <MovieList title="Em Breve" listName={listNames.upcoming} />
                </div>
            </main>
        </ThemeProvider>
    );
}

export default App;