import { About } from "./About";
import { Celebrate } from "./Celebrate";
import { Home } from "./Home";
import { Send } from "./Send";

const Main = () => {
  return (
		<main className="main">
			<Home/>
			<About/>
			<Send/>
			<Celebrate/>
		</main>
	)
}

export {Main};
