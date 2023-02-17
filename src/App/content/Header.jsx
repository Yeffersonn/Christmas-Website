import React from "react";

const Header = () => {
	return (
		<header className="header" id="header">
			<nav className="nav container">
				<a href="#" className="nav__logo">
					<img src="assets/img/logo.png" alt="logo image" />
					Christmas
				</a>
				<div className="nav__menu" id="nav-menu">
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#home" className="nav__link">Home</a>
						</li>
						<li className="nav__item">
							<a href="#about" className="nav__link">About</a>
						</li>
						<li className="nav__item">
							<a href="#send" className="nav__link">Send</a>
						</li>
						<li className="nav__item">
							<a href="#celebrate" className="nav__link">Celebrate</a>
						</li>
					</ul>

					<div className="nav__close" id="nav-close">
						<i className="ri-close-line"></i>
					</div>
					<img src="assets/img/snow-img.png" alt="Nav Image" className="nav__img-1" />
					<img src="assets/img/snow-img.png" alt="Nav Image" className="nav__img-2" />
				</div>
				<div className="nav__toggle" id="nav-toggle">
					<i className="ri-apps-2-line"></i>
				</div>
			</nav>
		</header>
	);
};

export { Header };
