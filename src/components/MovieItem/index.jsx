import { MovieCard } from "./styles";
import PropTypes from "prop-types";

const MovieItem = ({ cardImg, title }) => {
	return (
		<MovieCard title={title}>
			<a href="https://www.youtube.com">
				<img src={cardImg} alt={title} />
			</a>
		</MovieCard>
	);
};

MovieItem.propTypes = {
	cardImg: PropTypes.string,
	title: PropTypes.string,
};

export default MovieItem;
