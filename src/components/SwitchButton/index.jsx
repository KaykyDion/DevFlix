import PropTypes from "prop-types";
import { SwitchContainer, SwitchInput, SwitchKnob } from "./styles";

const SwitchButton = ({ isChecked, handleToggle }) => {
	return (
		<SwitchContainer onClick={handleToggle}>
			<SwitchInput
				type="checkbox"
				checked={isChecked}
				onChange={handleToggle}
			/>
			<SwitchKnob isChecked={isChecked} />
		</SwitchContainer>
	);
};

SwitchButton.propTypes = {
	isChecked: PropTypes.bool,
	handleToggle: PropTypes.func,
};

export default SwitchButton;
