import "./Post.css";
import { useState, useEffect } from "react";

import React from "react";

const Post = ({ task }) => {
	// console.log(task);
	const [state, setState] = useState(1);

	return (
		<>
			<div className="square">
				<h1>{task.Company}</h1>
				<p>{task.Description}</p>
				{state === 1 && (
					<button className="accept" onClick={() => setState(2)}>
						<p>Accept</p>
					</button>
				)}
				{state === 2 && (
					<button className="upload" onClick={() => setState(3)}>
						Upload
					</button>
				)}
				{state === 3 && (
					<button className="submit" onClick={() => setState(1)}>
						Submit
					</button>
				)}
			</div>
		</>
	);
};

export default Post;
