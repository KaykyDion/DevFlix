import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { GlobalStyle } from "./globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ToggleThemeContext } from "./contexts/ToggleThemeContext";
import { useContext } from "react";

function App() {
	const { usingDarkTheme } = useContext(ToggleThemeContext);

	return (
		<ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
