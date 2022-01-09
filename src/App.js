import "./App.css";
import Post from "./Post";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
	const key = "wTQiakvGaa0tNTWAZq4ojBYiL6VyRpsWuzD2T2a1";
	const [images, setImages] = useState([]);

	const fetchImages = (num) => {
		axios
			.get("https://api.nasa.gov/planetary/apod", {
				params: {
					api_key: key,
					count: num,
				},
			})
			.then((response) => {
				setImages([...images, ...response.data]);
				console.log(response.data);
				console.log(images);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchImages(3);
	}, []);

	return (
		<div className="app">
			<header>
				<h1 id="app-title">🌙 Spacestagram</h1>
				<h4 id="app-subtitle">
					Powered by NASA's Astronomy Picture of the Day API
				</h4>
			</header>
			<div className="container">
				{images ? (
					images.map((img) => (
						<Post
							title={img.title}
							body={img.explanation}
							date={img.date}
							img={img.url}
						/>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</div>
	);
};

export default App;
