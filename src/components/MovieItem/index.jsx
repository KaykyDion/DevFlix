import { Link } from "react-router-dom";
import { MovieCard } from "./styles";
import PropTypes from "prop-types";

const MovieItem = ({ cardImg, title, id }) => {
	return (
		<MovieCard title={title}>
			<Link to={`/${id}`}>
				<img src={`https://image.tmdb.org/t/p/w300/${cardImg}`} alt={title} />
			</Link>
		</MovieCard>
	);
};

MovieItem.propTypes = {
	cardImg: PropTypes.string,
	title: PropTypes.string,
	id: PropTypes.number,
};

export default MovieItem;
