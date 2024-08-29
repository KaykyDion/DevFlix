import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import RootLayout from "./pages/RootLayout";
import SearchResults from "./containers/SearchResults";

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
			},
			{
				path: "/search",
				element: <SearchResults />,
			},
		],
	},
]);

export default router;
