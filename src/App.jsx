import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<GlobalStyle />
			<RouterProvider router={router} />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
