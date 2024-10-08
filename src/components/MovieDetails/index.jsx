import PropTypes from "prop-types";
import playIcon from "../../assets/images/play-icon.svg";
import formatDate from "../../utils/formatDate";
import minutesToHours from "../../utils/minutesToHours";
import { Container, Infos, Overview, PlayBtn } from "./styles";
import Modal from "../Modal";
import { useState } from "react";

export const MovieDetails = ({
	backDropImg,
	posterImg,
	title,
	genres,
	runtime,
	overview,
	releaseDate,
	voteAverage,
	trailer,
}) => {
	const date = formatDate(releaseDate.split("-").join("/"));
	const movieGenres = genres.map((genre) => `${genre.name}`).join(", ");
	const movieRuntime = minutesToHours(runtime);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<>
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
					{trailer && (
						<PlayBtn onClick={() => setModalIsOpen(true)}>
							<img src={playIcon} alt="ícone de reprodução" /> Reproduzir
							trailer
						</PlayBtn>
					)}
					{overview && (
						<Overview>
							<h3>Sinopse</h3>
							<p>{overview}</p>
						</Overview>
					)}
				</div>
			</Container>
			{trailer && (
				<Modal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}>
					<iframe
						width="720"
						height="460"
						src={`https://www.youtube.com/embed/${trailer.key}?si=ijo9n6oMfV3VjPiG`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
					></iframe>
				</Modal>
			)}
		</>
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
	trailer: PropTypes.object,
};

export default MovieDetails;
