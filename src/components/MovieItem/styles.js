import styled from "styled-components";

export const MovieCard = styled.div`
	border-radius: 10px;
	width: 180px;
	height: 220px;
	transition: 0.4s;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 3px #cc00cc, 0 0 6px #cc00cc, 0 0 9px #cc00cc,
			0 0 12px #cc00cc;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
`;
