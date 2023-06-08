import React from "react";
import firebase from "../fire";
import { useState, useEffect } from "react";
import { QuerySnapshot } from "firebase/firestore";

const List = () => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(false);

	const ref = firebase.firestore().collection("tasks");

	const getTasks = () => {
		setLoading(true);
		// We are adding an onSnapshot method to ref
		ref.onSnapshot((querySnapshot) => {
			// Item sarray
			const items = [];
			// GO through forEach, and apply the data document into the items array
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setTasks(items);
			setLoading(false);
		});
	};

	// Use effect prevents thing from being called too much
	useEffect(() => {
		getTasks();
	}, []);

	console.log(tasks);

	console.log();

	return (
		<>
			{tasks.map((task, index) => (
				<div key={task.id}>
					<h1>{task.Description}</h1>
					<p>Creator: {task.Creator}</p>
					<p>Assignee: {task.Assignee}</p>
					<p>Completed: {task.Completed ? "Yes" : "No"}</p>
				</div>
			))}
		</>
	);
};

export default List;
