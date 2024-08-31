import PropTypes from "prop-types";
import playIcon from "../../assets/images/play-icon.svg";
import formatDate from "../../utils/formatDate";
import minutesToHours from "../../utils/minutesToHours";
import { Container, Infos, Overview, PlayBtn } from "./styles";

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
	const movieGenres = genres.map((genre) => `${genre.name}`).join(", ");
	const movieRuntime = minutesToHours(runtime);

	return (
		<Container
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backDropImg})`,
			}}
		>
			<img src={`https://image.tmdb.org/t/p/w300/${posterImg}`} alt={title} />
			<div>
				<Infos>
					<h2>{title}</h2>
					<strong>
						Nota: [ {voteAverage} ] {date} - {movieGenres} - {movieRuntime}
					</strong>
				</Infos>
				<PlayBtn>
					<img src={playIcon} alt="ícone de reprodução" /> Reproduzir trailer
				</PlayBtn>
				{overview && (
					<Overview>
						<h3>Sinopse</h3>
						<p>{overview}</p>
					</Overview>
				)}
			</div>
		</Container>
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
	voteAverage: PropTypes.number,
};

export default MovieDetails;
