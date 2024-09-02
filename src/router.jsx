import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import RootLayout from "./pages/RootLayout";
import SearchResults from "./containers/SearchResults";
import loadMovie from "./loaders/movie";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/:movieId",
				element: <MoviePage />,
				loader: loadMovie,
			},
			{
				path: "/search",
				element: <SearchResults />,
			},
		],
	},
]);

export default router;
