import { useContext } from "react";
import PropTypes from "prop-types";
import {
	ModalOverlay,
	ModalContainer,
	CloseButton,
	Config,
	IconContainer,
	IconItem,
	IconText,
	IconButton,
} from "./styles";
import themeIcon from "../../assets/images/theme.png";
import SwitchButton from "../SwitchButton";
import { ToggleThemeContext } from "../../contexts/ToggleThemeContext";

const Configurations = ({ isOpen, onClose }) => {
	const { usingDarkTheme, handleThemeChange } = useContext(ToggleThemeContext);

	if (!isOpen) return null;

	return (
		<ModalOverlay>
			<ModalContainer>
				<CloseButton onClick={onClose}>X</CloseButton>
				<Config>Configurações</Config>
				<IconContainer>
					<IconItem>
						<IconButton>
							<img src={themeIcon} alt="Tema" />
						</IconButton>
						<SwitchButton
							isChecked={!usingDarkTheme}
							handleToggle={handleThemeChange}
						/>
						<IconText>Tema Claro</IconText>
					</IconItem>
				</IconContainer>
			</ModalContainer>
		</ModalOverlay>
	);
};

Configurations.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
};

export default Configurations;
