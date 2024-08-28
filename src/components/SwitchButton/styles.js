import styled from "styled-components";

export const SwitchContainer = styled.div`
	position: relative;
	width: 60px;
	height: 30px;
	background-color: ${(props) => (props.isChecked ? "#4caf50" : "#ccc")};
	border-radius: 30px;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: background-color 0.3s ease;
	box-shadow: ${(props) =>
		props.isChecked
			? "0 4px 8px rgba(76, 175, 80, 0.3)"
			: "0 4px 8px rgba(204, 204, 204, 0.3)"};
	z-index: 1002;
`;

export const SwitchInput = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
`;

export const SwitchKnob = styled.div`
	position: absolute;
	top: 50%;
	left: ${(props) => (props.isChecked ? "calc(100% - 26px)" : "2px")};
	width: 24px;
	height: 24px;
	background-color: #fff;
	border-radius: 50%;
	transform: translateY(-50%);
	transition: left 0.3s ease, box-shadow 0.3s ease;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	&:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 8px;
		height: 8px;
		background-color: ${(props) => (props.isChecked ? "#38b6ff" : "#ff3131")};
		border-radius: 50%;
		transform: translate(-50%, -50%);
	}
`;
