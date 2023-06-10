import React from "react";

const Login = (props) => {

    const {email, setEmail, password, setPassword, hasAccount, setHasAccount, handleLogin, handleSignUp, emailError, passwordError, userRole, setUserRole, companyName, setCompanyName, setCompanyLogo, studentName, setStudentName, setStudentLogo} = props;


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
                    <>
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
                        {userRole === 'admin' && (
                            <>
                                <label>Company Name</label>
                                <input type="text" required value = {companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                <label>Company Logo</label>
                                <input type="file" onChange={(e) => setCompanyLogo(e.target.files[0])} />
                            </>
                        )}
                        {userRole === 'student' && (
                            <>
                                <label>Student Name</label>
                                <input type="text" required value = {studentName} onChange={(e) => setStudentName(e.target.value)} />
                                <label>Student Picture</label>
                                <input type="file" onChange={(e) => setStudentLogo(e.target.files[0])} />
                            </>
                        )}
                    </>
                )}
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Log in</button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignUp}>Sign up</button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Log in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Login;