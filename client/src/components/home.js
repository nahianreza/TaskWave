import React from "react";

const Home = (props) => {
    return(
        <section className="home">
            <nav>
                <h2>Tech Incubator</h2>
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Home;