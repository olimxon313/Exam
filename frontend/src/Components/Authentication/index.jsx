import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import Login from "./Login/Login";
import Registration from "./Registration/Register";
import "./style.scss";

function Authentication() {
    const [isRegistered, setIsRegistered] = useState(true);

    function toggleAuth() {
        setIsRegistered(!isRegistered);
    }

    return (
        <div className="auth-wrapper-container">
            <Heading title={isRegistered ? "Login" : "Create Account"}>
                <CiLogin />
            </Heading>
            
            <div className="form-wrapper">
                {isRegistered ? <Login /> : <Registration />}

                <p className="auth-toggler-container">
                    {isRegistered ? (
                        <span>
                            No account? <button onClick={toggleAuth}>Create one</button>
                        </span>
                    ) : (
                        <span>
                            Already have an account? <button onClick={toggleAuth}>Log in</button>
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}

export default Authentication;
