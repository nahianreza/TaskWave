import React from "react";
import firebase from "../fire";
import { useState, useEffect } from "react";
import { QuerySnapshot } from "firebase/firestore";
import Post from "./Post";
import "./List.css";

const List = ({ student }) => {
	const [tasks, setTasks] = useState([]);
	const [needGetTasks, setNeedGetTasks] = useState(true);
	const [loaded, setLoading] = useState(false);

	const ref = firebase.firestore().collection("allTasks");

	const getTasks = () => {
		setLoading(true);
		// We are adding an onSnapshot method to ref
		ref.onSnapshot((querySnapshot) => {
			// Item array
			const items = [];
			// Go through forEach, and apply the data document into the items array
			querySnapshot.forEach((doc) => {
				items.push({ id: doc.id, ...doc.data() });
			});
			setTasks(items);
			setLoading(false);
		});
	};

	{
		// const getTasks = () => {
		// 	let items = [
		// 		{ Creator: "Ihsaan", Description: "Implement stack" },
		// 		{ Creator: "Armaan", Description: "Implement backend" },
		// 		{ Creator: "Abhi", Description: "Shut up" },
		// 	];
		// 	setTasks(items);
		// };
		// Use effect prevents thing from being called too much
		// useEffect(() => {
		// 	getTasks();
		// 	console.log(tasks);
		// }, []);
	}

	if (loaded) {
		return (
			<div>
				<h1>Tasks loading!</h1>
			</div>
		);
	}

	return (
		<>
			<h1>{student}</h1>
			<div className="list-div">
				<div>
					<button id="tasks-button" onClick={getTasks}>
						Refresh
					</button>
				</div>

				{tasks.map((task, index) => (
					<div key={task.id}>
						<Post task={task} collection={ref}></Post>
					</div>
				))}
			</div>
		</>
	);
};

export default List;
