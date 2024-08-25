const minutesToHours = (min) => {
	const hours = Math.floor(min / 60);
	const minutes = Math.floor(min % 60);

	return hours < 1 ? `${min}m` : `${hours}h ${minutes}m`;
};

export default minutesToHours;
