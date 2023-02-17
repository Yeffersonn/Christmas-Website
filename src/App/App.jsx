import { Footer } from "./content/Footer";
import { Header } from "./content/Header";
import { Main } from "./content/Main";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
			<a href="#" className="scrollup" id="scroll-up">
				<i className="ri-arrow-up-line"></i>
			</a>
		</div>
	);
}

export default App;
