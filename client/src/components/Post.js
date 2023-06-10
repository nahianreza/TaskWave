import "./Post.css";

import React from "react";

const Post = ({ task }) => {
	console.log(task);

	return (
		<>
			<div className="square">
				<h1>{task.Creator}</h1>
				<p>{task.Description}</p>
			</div>
		</>
	);
};

export default Post;
