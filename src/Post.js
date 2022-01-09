import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "./Post.css";

const Post = ({ title, body, date, img }) => {
	return (
		<Card>
			<CardImg alt="Card image cap" src={img} top width="100%" />
			<CardBody>
				<CardTitle tag="h5">{title}</CardTitle>

				<CardText>{body}</CardText>
				<CardText id="date">{date}</CardText>
			</CardBody>
		</Card>
	);
};

export default Post;
