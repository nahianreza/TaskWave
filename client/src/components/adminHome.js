import React, { useState } from "react";

const AdminHome = (props) => {

    const [modalOpen, setModalOpen] = useState(false);
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
 
    return(
        <section className="home">
            <nav>
                <h2>Tech Incubator for companies</h2>
                <div>
                    <button className="create-assignment-button" onClick={handleOpenModal}>Create Assignment</button>
                    <button onClick={props.handleLogout}>Logout</button>
                </div>
            </nav>
            {modalOpen && (
                <div className="modal">
                    <h2>Create Assignment</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Assignment Name
                            <input type="text" value={assignmentName} onChange={handleAssignmentNameChange} />
                        </label>
                        <label>
                            Assignment Detail
                            <textarea value={assignmentDetail} onChange={handleAssignmentDetailChange} />
                        </label>
                        <button type="submit">Submit</button>
                        <button onClick={handleCloseModal}>Close</button>
                    </form>
                </div>
            )}
        </section>
    )
}

export default AdminHome;