import styled from "styled-components";

export const MovieCard = styled.li`
	width: 200px;
	border-radius: 10px;
	min-width: 180px;
	min-height: 220px;
	transition: 0.4s;
	cursor: pointer;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

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
