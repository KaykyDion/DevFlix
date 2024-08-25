import { useState } from "react";
import {
	HeaderStyle,
	HeaderTop,
	SearchBar,
	SettingsIcon,
	Logo,
	Button,
	NavItem,
	NavContainer,
} from "./styles";
import logo from "../../assets/images/logo.png";
import settingsIcon from "../../assets/images/settingsIcon.png";
import Configurations from "../Configurations";

const HeaderComponent = () => {
	const [isConfigOpen, setIsConfigOpen] = useState(false);

	const toggleConfigurations = () => {
		setIsConfigOpen((prevState) => !prevState);
	};

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		} else {
			console.error(`Element with id ${sectionId} not found.`);
		}
	};

	return (
		<HeaderStyle>
			<HeaderTop>
				<h1>
					<Logo src={logo} alt="Logo DevFlix" />
				</h1>
				<NavContainer>
					<NavItem onClick={() => scrollToSection("popular")}>
						Populares
					</NavItem>
					<NavItem onClick={() => scrollToSection("topRated")}>
						Maiores Notas
					</NavItem>
					<NavItem onClick={() => scrollToSection("nowPlaying")}>
						Lançamentos
					</NavItem>
					<NavItem onClick={() => scrollToSection("upcoming")}>
						Em Breve
					</NavItem>
				</NavContainer>
				<div>
					<SearchBar type="text" placeholder="Pesquisar" />
					<Button onClick={toggleConfigurations}>
						<SettingsIcon src={settingsIcon} alt="Configuração" />
					</Button>
				</div>
			</HeaderTop>
			<Configurations isOpen={isConfigOpen} onClose={toggleConfigurations} />
		</HeaderStyle>
	);
};

export default HeaderComponent;
