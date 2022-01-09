import "./App.css";
import Post from "./Post";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ThreeDots } from "react-loader-spinner";

const App = () => {
	const key = "wTQiakvGaa0tNTWAZq4ojBYiL6VyRpsWuzD2T2a1";
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchImages = (num) => {
		setLoading(true);
		axios
			.get("https://api.nasa.gov/planetary/apod", {
				params: {
					api_key: key,
					count: num,
				},
			})
			.then((response) => {
				setImages([...images, ...response.data]);
				setLoading(false);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchImages(12);
	}, []);

	return (
		<div className="app">
			<header>
				<h1 id="app-title">
					<FontAwesomeIcon icon={faSpaceShuttle} className="logo" />{" "}
					Spacestagram
				</h1>
				<a
					id="repo-link"
					href="https://github.com/martinivnv/spacestagram"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				{/* <h4 id="app-subtitle">
					Powered by NASA's Astronomy Picture of the Day API
				</h4> */}
			</header>
			{!images ? (
				<h1>Loading...</h1>
			) : (
				<div className="container">
					{images.map((img) => (
						<Post
							title={img.title}
							body={img.explanation}
							date={img.date}
							img={img.url}
							hdUrl={img.hdurl}
							key={img.date}
						/>
					))}
				</div>
			)}

			{!loading ? (
				<button id="load-button" onClick={() => fetchImages(12)}>
					Load More...
				</button>
			) : (
				<ThreeDots color="#e91e63" height="100" width="100" />
			)}
		</div>
	);
};

export default App;
