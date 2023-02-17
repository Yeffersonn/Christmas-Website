const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<a href="#" className="footer__logo">
					Christmas
				</a>
				<ul className="footer__social">
					<li>
						<a
							href="https://www.facebook.com/"
							target="_blank"
							className="footer__social-link"
						>
							<i className="ri-facebook-fill"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							className="footer__social-link"
						>
							<i className="ri-instagram-fill"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.twitter.com/"
							target="_blank"
							className="footer__social-link"
						>
							<i className="ri-twitter-fill"></i>
						</a>
					</li>
				</ul>
				<span className="footer__copy">
					&#169; Copyright. ALl rights reserved
				</span>
				<img src="assets/img/snow-img.png" alt="footer image" className="footer__snow-1" />
				<img src="assets/img/snow-img.png" alt="footer image" className="footer__snow-2" />
			</div>
		</footer>
	);
};

export { Footer };
