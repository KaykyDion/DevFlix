import { HeaderStyle, HeaderTop, SearchBar, SettingsIcon , Logo, Button } from "./styles";
import Nav from "../Nav";
import logo from "../../assets/images/logo.png"
import settingsIcon from "../../assets/images/settingsIcon.png"

const HeaderComponent = () => {
	return (
		<HeaderStyle>
			<HeaderTop>
				<h1><Logo src={logo} alt="Logo DevFlix" /></h1>
				<div>
					<SearchBar type="text" placeholder="Pesquisar" />
					<Button><SettingsIcon src={settingsIcon} alt="Configuração" /></Button>
				</div>
			</HeaderTop>
			<Nav />
		</HeaderStyle>
	);
};

export default HeaderComponent;
