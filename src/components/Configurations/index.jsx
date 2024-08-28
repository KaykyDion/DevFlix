import { useContext, useState } from "react";
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
import languagesIcon from "../../assets/images/languages.png";
import SwitchButton from "../SwitchButton";
import { ToggleThemeContext } from "../../contexts/ToggleThemeContext";

const Configurations = ({ isOpen, onClose }) => {
	const [language, setLanguage] = useState("pt");
	const { usingDarkTheme, setUsingDarkTheme } = useContext(ToggleThemeContext);

	if (!isOpen) return null;

	const handleLanguageChange = () => {
		setLanguage((prevLanguage) => (prevLanguage === "pt" ? "en" : "pt"));
	};

	const handleThemeChange = () => {
		setUsingDarkTheme(!usingDarkTheme);
	};

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
					<IconItem>
						<IconButton>
							<img src={languagesIcon} alt="Idiomas" />
						</IconButton>
						<SwitchButton onClick={handleLanguageChange} />
						<IconText>{language === "pt" ? "Português" : "English"}</IconText>
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
