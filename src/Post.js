import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "./Post.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCamera } from "@fortawesome/free-solid-svg-icons";

const Post = ({ title, body, date, img, hdUrl }) => {
	const [liked, setLiked] = useState(false);

	return (
		<div>
			<Card>
				<CardImg alt="Card image cap" src={img} top width="100%" />
				<CardBody>
					<CardTitle tag="h5">{title}</CardTitle>
					{liked ? (
						<FontAwesomeIcon
							icon={faHeart}
							className="heart"
							onClick={() => setLiked(false)}
							style={{ color: "#e91e63" }}
						/>
					) : (
						<FontAwesomeIcon
							icon={faHeart}
							className="heart"
							onClick={() => setLiked(true)}
							style={{ color: "#dfdfdf" }}
						/>
					)}
					<CardText>{body}</CardText>
					<a href={hdUrl} target="_blank" rel="noreferrer" className="hd-link">
						<FontAwesomeIcon icon={faCamera} />
						{"     "}See it in HD
					</a>
					<CardText className="date">{date}</CardText>
				</CardBody>
			</Card>
		</div>
	);
};

export default Post;
