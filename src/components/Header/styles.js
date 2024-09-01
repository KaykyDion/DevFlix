import styled from "styled-components";

export const HeaderStyle = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 15px;
`;

export const HeaderTop = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	border-radius: 20px;

	@media (max-width: 768px) {
		width: 100%;
		padding: 24px 18px;
	}

	div {
		display: flex;
		align-items: center;
		gap: 25px;

		@media (max-width: 768px) {
			gap: 8px;
		}
	}
`;

export const SearchBar = styled.input`
	padding: 8px 16px;
	border: none;
	border-radius: 4px;

	@media (max-width: 768px) {
		width: 120px;
	}
`;

export const Logo = styled.img`
	width: 150px;

	@media (max-width: 768px) {
		width: 120px;
	}
`;

export const SettingsIcon = styled.img`
	width: 24px;
	height: 24px;
`;

export const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`;
