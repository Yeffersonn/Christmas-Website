const Send = () => {
	return (
		<section className="send section" id="send">
			<h2 className="section__title">
				Send Love This <br />
				Christmas
			</h2>
			<div className="send__container container grid">
				<div className="send__card">
					<img
						src="assets/img/send-night.png"
						alt="send image"
						className="send__img"
					/>
					<h3 className="send__title">Spend It With Family</h3>
					<p className="send__description">
						Sharing with family is the best gift you can give.
					</p>
				</div>
				<div className="send__card">
					<img
						src="assets/img/send-gifts.png"
						alt="send image"
						className="send__img"
					/>
					<h3 className="send__title">Give Lots Of Love</h3>
					<p className="send__description">
						Send a gift and a lot of love to those most in need.
					</p>
				</div>
				<div className="send__card">
					<img
						src="assets/img/send-santa.png"
						alt="send image"
						className="send__img"
					/>
					<h3 className="send__title">Share Good Wishes</h3>
					<p className="send__description">
						Wish good messages to loved ones this Christmas.
					</p>
				</div>
				<img src="assets/img/snow-img.png" alt="send image" className="send__snow-1"/>
				<img src="assets/img/snow-img.png" alt="send image" className="send__snow-2"/>
				<img src="assets/img/snow-img.png" alt="send image" className="send__snow-3"/>
			</div>
		</section>
	);
};

export { Send };
