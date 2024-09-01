import styled from "styled-components";

export const NavContainer = styled.nav`
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 12px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	margin: 0 auto;
	margin-top: 15px;
	border-radius: 20px;

	@media (max-width: 768px) {
		width: 95%;
	}
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

	@media (max-width: 768px) {
		padding: 6px 4px;
		margin: 0 6px;
		font-size: 12px;
		white-space: nowrap;
	}

	@media (max-width: 360px) {
		white-space: normal;
	}

	&:hover {
		transform: translateY(-4px);
		background-color: #000033;
	}
`;
