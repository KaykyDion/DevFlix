import PropTypes from "prop-types";
import playIcon from "../../assets/images/play-icon.svg";
import formatDate from "../../utils/formatDate";
import minutesToHours from "../../utils/minutesToHours";

export const MovieDetails = ({
	backDropImg,
	posterImg,
	title,
	genres,
	runtime,
	overview,
	releaseDate,
	voteAverage,
}) => {
	const date = formatDate(releaseDate.split("-").join("/"));
	const genresList = genres.map((genre) => `${genre.name}`).join(", ");
	const movieRuntime = minutesToHours(runtime);

	return (
		<section
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backDropImg})`,
			}}
		>
			<img src={`https://image.tmdb.org/t/p/w300/${posterImg}`} alt={title} />
			<div>
				<div>
					<h2>{title}</h2>
					<strong>
						Nota: [ {voteAverage} ] - {date} - {genresList} - {movieRuntime}
					</strong>
				</div>
				<div>
					<button>
						<img src={playIcon} alt="ícone de reprodução" /> Reproduzir trailer
					</button>
					<h3>Sinopse</h3>
					<p>{overview}</p>
				</div>
			</div>
		</section>
	);
};

MovieDetails.propTypes = {
	backDropImg: PropTypes.string,
	posterImg: PropTypes.string,
	title: PropTypes.string,
	genres: PropTypes.array,
	overview: PropTypes.string,
	runtime: PropTypes.number,
	releaseDate: PropTypes.string,
	voteAverage: PropTypes.string,
};

export default MovieDetails;
