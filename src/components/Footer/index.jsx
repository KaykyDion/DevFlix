import logo from "../../assets/images/logo.png";
import { Container } from "./styles";

const Footer = () => (
	<Container>
		<img src={logo} alt="Logo DevFlix" />
		<p>
			Desenvolvido por{" "}
			<a
				target="_blank"
				href="https://www.linkedin.com/in/kayky-dion-b67b59235/"
			>
				KaykyDion
			</a>{" "}
			&{" "}
			<a target="_blank" href="https://virtual-business-card-ten.vercel.app/">
				IgorRian
			</a>
		</p>
	</Container>
);

export default Footer;
