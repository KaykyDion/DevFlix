import styled from "styled-components";

export const Loader = styled.div`
	animation: is-rotating 1s infinite;
	border: 6px solid transparent;
	border-top-color: ${({ theme }) => theme.colors.secondary};
	border-right-color: ${({ theme }) => theme.colors.secondary};
	height: 50px;
	width: 50px;
	border-radius: 50%;

	@keyframes is-rotating {
		to {
			transform: rotate(1turn);
		}
	}
`;
