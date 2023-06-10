import React from "react";
import firebase from "../fire";
import { useState, useEffect } from "react";
import { QuerySnapshot } from "firebase/firestore";
import Post from "./Post";
import "./List.css";

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

	// if (loading) {
	// 	return <p>Error in getting database</p>;
	// }

	// Use effect prevents thing from being called too much
	useEffect(() => {
		getTasks();
	}, []);

	// tasks = getTasks();

	console.log(tasks);

	return (
		<div className="list-div">
			{tasks.map((task, index) => (
				<div key={task.id}>
					<Post task={task}></Post>
				</div>
			))}
		</div>
	);
};

export default List;
