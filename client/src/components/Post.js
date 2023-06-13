import "./Post.css";
import { useState, useEffect } from "react";

import React from "react";

const Post = ({ task }) => {
	// console.log(task);
	const [state, setState] = useState(1);
	const [url, setUrl] = useState("");
	const [estimatedTime, setEstimatedTime] = useState("");

	if (!task.hasOwnProperty("Creator")) {
		return;
	}

	const handleUrlChange = (event) => {
		setUrl(event.target.value);
	  };
	
	  const handleUrlSubmit = () => {
		// Process the submitted URL here
		console.log(url);
		setState(1);
	  };
	
	const handleEstimatedTimeChange = (event) => {
		setEstimatedTime(event.target.value);
	  };
	
	const handleEstimatedTimeSubmit = () => {
		// Process the submitted estimated time here
		console.log(estimatedTime);
		setState(1);
	  };

	return (
		<>
			<div className="square">
				<h1>{task.Creator}</h1>
				<p>{task.Description}</p>
				{state === 1 && (
					<>
						<input
							type="text"
							placeholder="Estimated Time"
							value={estimatedTime}
						o	nChange={handleEstimatedTimeChange}
						/>	
						<button className="accept" onClick={() => setState(2)}>
							<p>Accept</p>
						</button>
					</>
				)}
				{state === 2 && (
					<>
						<input
							type="text"
							placeholder="Enter Git Hub URL"
							value={url}
							onChange={handleUrlChange}
						/>	
						<button className="upload" onClick={() => setState(3)}>
							Upload
						</button>
					</>
				)}
				{state === 3 && (
					<>
						<input
							type="text"
							placeholder="Enter Git Hub URL"
							value={url}
							onChange={handleUrlChange}
						/>	
						<button className="submit" onClick={() => setState(1)}>
							Submit
						</button>
					</>
				)}
			</div>
		</>
	);
};

export default Post;
