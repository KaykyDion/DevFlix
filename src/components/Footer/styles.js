import styled from "styled-components";

export const Container = styled.footer`
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	text-align: center;
	padding: 40px 0;
	font-weight: bold;

	img {
		margin-bottom: 20px;
		height: 40px;
	}

	a {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;
