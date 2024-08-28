import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ToggleThemeProvider from "./contexts/ToggleThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToggleThemeProvider>
			<App />
		</ToggleThemeProvider>
	</React.StrictMode>
);
