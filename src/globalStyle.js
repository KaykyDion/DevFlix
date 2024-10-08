import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
  }

	.container {
    padding: 0 3%;
		width: 100%;
		margin: 0 auto;
	}

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
		transition: 0.3s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

	::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.scrollBarColor};
  border-radius: 10px;
}
`;
