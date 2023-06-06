import React from "react";

const AdminHome = (props) => {
    return(
        <section className="home">
            <nav>
                <h2>Tech Incubator for companies</h2>
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default AdminHome;