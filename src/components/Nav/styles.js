import styled from "styled-components";

export const NavContainer = styled.nav`
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 12px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
	margin: 0 auto;
	margin-top: 15px;
	border-radius: 20px;
`;

export const NavItem = styled.a`
	color: #e7f0f8;
	font-size: 16px;
	cursor: pointer;
	border-radius: 5px;
	border: solid 1px white;
	padding: 6px 12px;
	text-align: center;
	margin: 0 10px;
	transition: transform 0.3s ease, background-color 0.3s ease;

	&:hover {
		transform: translateY(-4px);
		background-color: #000033;
	}
`;
