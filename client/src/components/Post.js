import "./Post.css";

import React from "react";

const Post = ({ task }) => {
	return (
		<>
			<div className="post-div">
				<div>
					<h1>{task.Creator}</h1>
				</div>
				<p>{task.Description}</p>
			</div>
			{/* <h1>{task.Description}</h1> */}
		</>
	);
};

export default Post;
