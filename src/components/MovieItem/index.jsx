import { MovieCard } from "./styles";
import PropTypes from "prop-types";

const MovieItem = ({ cardImg, title, onClick }) => {
	return (
		<MovieCard title={title} onClick={onClick}>
			<img src={cardImg} alt={title} />
		</MovieCard>
	);
};

MovieItem.propTypes = {
	cardImg: PropTypes.string,
	title: PropTypes.string,
	onclick: PropTypes.func,
};

export default MovieItem;
