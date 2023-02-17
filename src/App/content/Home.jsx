const Home = () => {
	return (
		<section className="home section" id="home">
			<h1 className="home__title">Merry Christmas</h1>
			<img
				src="assets/img/home-moon.png"
				alt="home image"
				className="home__moon parallax"
				data-rellax-speed="-15"
			/>
			<img
				src="assets/img/home-trineo-santa.png"
				alt="home image"
				className="home__trineo parallax"
				data-rellax-speed="-2"
			/>
			<img
				src="assets/img/home-mountain-3.png"
				alt="home image"
				className="home__mountain-3 parallax"
				data-rellax-speed="-8"
			/>
			<img
				src="assets/img/home-mountain-2.png"
				alt="home image"
				className="home__mountain-2 parallax"
				data-rellax-speed="-8"
			/>
			<img
				src="assets/img/home-pine-tree.png"
				alt="home image"
				className="home__pine parallax"
				data-rellax-speed="-10"
			/>
			<img
				src="assets/img/home-village.png"
				alt="home image"
				className="home__village parallax"
				data-rellax-speed="-10"
			/>
			<img
				src="assets/img/home-snow.png"
				alt="home image"
				className="home__snow parallax"
			/>
			<img
				src="assets/img/home-mountain-1.png"
				alt="home image"
				className="home__mountain-1"
			/>
		</section>
	);
};

export { Home };
