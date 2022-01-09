import logo from "./logo.svg";
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
				<Post />
			</div>
		</div>
	);
}

export default App;
