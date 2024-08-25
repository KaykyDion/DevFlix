import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/:movieId",
		element: <MoviePage />,
	},
]);

export default router;
