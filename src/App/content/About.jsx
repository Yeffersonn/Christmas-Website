const About = () => {
	return (
		<section className="about section" id="about">
			<div className="about__container container grid">
				<div className="about__data">
					<h2 className="section__title">
						About Sharing <br />
						Happiness
					</h2>
					<p className="about__description">
						Sharing these holidays is the best gift you can give, give or
						share your love with the people you love the most and
						celebrate with great happiness.
					</p>
					<a href="#" className="button">
						Share Now
					</a>
				</div>
				<img src="assets/img/about-christmas.png" alt="about image" className="about__img" />
				<img src="assets/img/snow-img.png" alt="about image" className="about__snow-1" />
				<img src="assets/img/snow-img.png" alt="about image" className="about__snow-2" />
			</div>
		</section>
	);
};

export { About };
