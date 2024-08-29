import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	HeaderStyle,
	HeaderTop,
	SearchBar,
	SettingsIcon,
	Logo,
	Button,
} from "./styles";
import logo from "../../assets/images/logo.png";
import settingsIcon from "../../assets/images/settingsIcon.png";
import Configurations from "../Configurations";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
	const [isConfigurationsOpen, setIsConfigurationsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const toggleConfigurations = () => {
		setIsConfigurationsOpen((prevState) => !prevState);
	};

	const handleSearch = (e) => {
		if (e.key === "Enter" && searchTerm.trim()) {
			navigate(`/search?query=${searchTerm}`);
		}
	};

	return (
		<HeaderStyle>
			<HeaderTop>
				<h1>
					<Link to="/">
						<Logo src={logo} alt="Logo DevFlix" />
					</Link>
				</h1>
				<div>
					<SearchBar
						type="text"
						placeholder="Pesquisar"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						onKeyDown={handleSearch}
					/>
					<Button onClick={toggleConfigurations}>
						<SettingsIcon src={settingsIcon} alt="Configuração" />
					</Button>
				</div>
			</HeaderTop>
			<Configurations
				isOpen={isConfigurationsOpen}
				onClose={toggleConfigurations}
			/>
		</HeaderStyle>
	);
};

export default HeaderComponent;
