import React from "react";
import List from "./List";

const StudentHome = (props) => {
	console.log("User", props.user);

	return (
		<section className="home">
			<nav>
				<h2>Tech Incubator for students</h2>
				<button onClick={props.handleLogout}>Logout</button>
			</nav>
			<List user={props.user}></List>
		</section>
	);
};

export default StudentHome;
