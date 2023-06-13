import "./Post.css";
import { useState, useEffect } from "react";
import firebase from "../fire";

import React from "react";

// const Post = ({ task }) => {
// 	// console.log(task);
// 	const [state, setState] = useState(1);
// 	const ref = firebase.firestore().collection("allTasks");

// 	return (
// 		<>
// 			<div className="square">
// 				<h1>{task.Company}</h1>
// 				<p>{task.Description}</p>
// 				<p>ID: {task.id}</p>
// 				{state === 1 && (
// 					<button className="accept" onClick={() => setState(2)}>
// 						<p>Accept</p>
// 					</button>
// 				)}
// 				{state === 2 && (
// 					<button className="upload" onClick={() => setState(3)}>
// 						Upload
// 					</button>
// 				)}
// 				{state === 3 && (
// 					<button className="submit" onClick={() => setState(1)}>
// 						Submit
// 					</button>
// 				)}
// 			</div>
// 		</>
// 	);
// };

const Post = ({ task, collection }) => {
	// console.log(task);
	const [state, setState] = useState(1);
	const [url, setUrl] = useState("");
	const [estimatedTime, setEstimatedTime] = useState("");

	let doc = collection.doc(task.id).set;

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
		task.Developer = "Lol";
		// collection.doc(task.id);
	};

	const handleEstimatedTimeSubmit = () => {
		// Process the submitted estimated time here
		console.log(estimatedTime);
		setState(1);
	};

	const handleAccept = () => {
		setState(2);
		task.Developer = "BobTheBuilder";
		task.Accepted = true;
		collection.doc(task.id).set(task);

		// NOw update firebase
	};

	return (
		<>
			<div className="square">
				<div className="square-content">
				<div className="square-title">
				<h1>{task.Creator}</h1>
				<p>{task.Description}</p>
				</div>
				{state === 1 && (
					<>
						<input
							type="text"
							placeholder="Estimated Time"
							value={estimatedTime}
							onChange={handleEstimatedTimeChange}
							className="inputtag"
						/>
						<button className="accept" onClick={handleAccept}>
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
							className="inputtag"
						/>
						<button
							className="upload"
							onClick={() => {
								setState(3);
							}}
						>
							Upload
						</button>
					</>
				)}
				{state === 3 && (
					<>
						{/* <input
							type="text"
							placeholder="Enter Git Hub URL"
							value={url}
							onChange={handleUrlChange}
						/> */}
						<button className="submit" onClick={() => setState(1)}>
							Submit
						</button>
					</>
				)}
				</div>
			</div>
		</>
	);
};

export default Post;
