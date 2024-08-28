import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ToggleThemeContext = createContext();

function ToggleThemeProvider({ children }) {
	const [usingDarkTheme, setUsingDarkTheme] = useState(true);

	return (
		<ToggleThemeContext.Provider value={{ usingDarkTheme, setUsingDarkTheme }}>
			{children}
		</ToggleThemeContext.Provider>
	);
}

ToggleThemeProvider.propTypes = {
	children: PropTypes.node,
};

export default ToggleThemeProvider;
