import "./style.scss";
import React from "react";

function Login() {
    return (
        <div className="login-container">
            <div className="login-form-container">
                <header>
                    <h2>Login</h2>
                    <br />
                    <p>Please log in to your account.</p>
                    <br />
                </header>

                <form className="login-form">
                    <div className="form-group">
                        <input type="text" placeholder="Email address" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" />
                    </div> <br />
                    <div className="form-group">
                        <p className="forgot-password">Forgot your password?</p>
                    </div>
                    <div className="form-group">
                        <button className="submit-button" type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
