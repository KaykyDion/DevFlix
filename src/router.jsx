import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import RootLayout from "./pages/RootLayout";

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
		],
	},
]);

export default router;
