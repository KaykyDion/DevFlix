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
	width: 60%;
	border-radius: 20px;

	div {
		display: flex;
		align-items: center;
		gap: 25px;
	}
`;

export const SearchBar = styled.input`
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
`;

export const Logo = styled.img`
	width: 150px;
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
