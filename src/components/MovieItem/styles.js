import styled from "styled-components";

export const MovieCard = styled.li`
	border-radius: 10px;
	min-width: 180px;
	min-height: 220px;
	transition: 0.4s;
	cursor: pointer;

	&:hover {
		transform: translateY(-4px);
	}

	img {
		border-radius: 10px;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;
