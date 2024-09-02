import PropTypes from "prop-types";
import { Container } from "./styles";

const ErrorElement = ({ text }) => (
	<Container>
		<h2>{text}</h2>
	</Container>
);

ErrorElement.propTypes = {
	text: PropTypes.string,
};

export default ErrorElement;
