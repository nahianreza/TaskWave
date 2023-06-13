import React, { useState } from "react";

const AdminHome = (props) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [assignments, setAssignments] = useState([]);
	const [assignmentName, setAssignmentName] = useState("");
	const [assignmentDetail, setAssignmentDetail] = useState("");

	const handleOpenModal = () => {
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const handleAssignmentNameChange = (e) => {
		setAssignmentName(e.target.value);
	};

	const handleAssignmentDetailChange = (e) => {
		setAssignmentDetail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDeault();
		handleCloseModal();
	};

	return (
		<section className="home">
			<nav>
				<h2>TaskWave Admin</h2>
				<div>
					<button
						className="create-assignment-button"
						onClick={handleOpenModal}
					>
						Create Task
					</button>
					<button onClick={props.handleLogout}>Logout</button>
				</div>
			</nav>
			{assignments.length === 0 ? (
				<h1 style={{position: "absolute", fontWeight:"bold", color: "white", textAlign: "center", top: "50%", left: "36%"}}> Welcome to TaskWave!<br></br> No task created yet! Please create a task for students to accept.</h1>
			) : (
				assignments.map((assignment) => (
				<div key={assignment.id}>
					<h3>{assignment.name}</h3>
					<p>{assignment.details}</p>
				</div>
				))
			)}
			{modalOpen && (
				<div className="modal">
					<h2 style={{color: "white", fontSize: "30px"}}>Create Task</h2>
					<form onSubmit={handleSubmit}>
						<label>
							Task Name
							<input
								type="text"
								value={assignmentName}
								onChange={handleAssignmentNameChange}
							/>
						</label>
						<label>
							Task Detail
							<textarea
								value={assignmentDetail}
								onChange={handleAssignmentDetailChange}
							/>
						</label>
						<button type="submit">Submit</button>
						<button onClick={handleCloseModal}>Close</button>
					</form>
				</div>
			)}
		</section>
	);
};

export default AdminHome;
