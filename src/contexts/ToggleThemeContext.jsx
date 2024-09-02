import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ToggleThemeContext = createContext();

function ToggleThemeProvider({ children }) {
	const [usingDarkTheme, setUsingDarkTheme] = useState(() => {
		const theme = JSON.parse(localStorage.getItem("theme"));

		return theme;
	});

	function handleThemeChange() {
		setUsingDarkTheme(!usingDarkTheme);
		localStorage.setItem("theme", !usingDarkTheme);
	}

	return (
		<ToggleThemeContext.Provider value={{ usingDarkTheme, handleThemeChange }}>
			{children}
		</ToggleThemeContext.Provider>
	);
}

ToggleThemeProvider.propTypes = {
	children: PropTypes.node,
};

export default ToggleThemeProvider;
