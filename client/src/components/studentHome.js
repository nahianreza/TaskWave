import React from "react";

const StudentHome = (props) => {
    return(
        <section className="home">
            <nav>
                <h2>Tech Incubator for students</h2>
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default StudentHome;