import React from "react";

const Login = (props) => {

    const {email, setEmail, password, setPassword, hasAccount, setHasAccount, handleLogin, handleSignUp, emailError, passwordError, userRole, setUserRole} = props;


    return(
        <section className="login">
            <div className="loginContainer">
                <title>Tech Incubator</title>
                <label>Username</label>
                <input type="text" autoFocus required value ={email} onChange = {(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type = "text" required value = {password} onChange ={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                {!hasAccount && (
                    <div className="role-options">
                        <label className="role-option">
                            <input type="radio" value="student"
                                    checked = {userRole === 'student'}
                                    onChange={(e) => setUserRole(e.target.value)}/>
                            Student
                        </label>
                        <label className="role-option">
                            <input type="radio" value="admin"
                                    checked = {userRole === 'admin'}
                                    onChange={(e) => setUserRole(e.target.value)}/>
                            Admin
                        </label>
                    </div>
                )}
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignUp}>Sign up</button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Login;