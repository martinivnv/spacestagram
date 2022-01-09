import "./App.css";
import Post from "./Post";

function App() {
	return (
		<div className="app">
			<header>
				<h1 id="app-title">🌙 Spacestagram</h1>
				<h4 id="app-subtitle">
					Powered by NASA's Astronomy Picture of the Day API
				</h4>
			</header>
			<div className="container">
				<Post
					title="Title"
					body="Lorem ipsum fhjdfhjdafkaajdjadffkjah h fghkjg af fgk fg fdsgn gsfk jsdgfk j"
					date="10-23-2020"
					img="https://picsum.photos/318/180"
				/>
			</div>
		</div>
	);
}

export default App;
