import styled from "styled-components";

export const Container = styled.section`
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	display: flex;
	border-radius: 20px;
	padding: 60px;
	background-position: center;
	margin: 20px 0;
	color: #e7f0f8;
	box-shadow: 0 8px 12px rgba(0, 0, 0, 0.6);

	* {
		z-index: 2;
	}

	img {
		margin-right: 40px;
		border-radius: 20px;
		max-height: 450px;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		border-radius: 20px;
		z-index: 1;
	}
`;

export const Infos = styled.div`
	margin-bottom: 80px;

	h2 {
		font-size: 36px;
		margin-bottom: 8px;
	}
`;

export const PlayBtn = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-weight: bold;
	font-size: 14px;
	color: #e7f0f8;
	display: flex;
	align-items: center;
	margin-bottom: 40px;

	img {
		height: 40px;
		margin-right: 8px;
	}
`;

export const Overview = styled.div`
	h3 {
		font-size: 28px;
		margin-bottom: 8px;
	}

	p {
		line-height: 24px;
		max-width: 1000px;
		color: #e7f0f8;
	}
`;
