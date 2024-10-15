import "./style.scss";
import React from "react";

function Registration() {
    return (
        <div className="registration-container">
            <div className="registration-form-container">
                <header>
                    <h2>Create Account</h2>
                    <br />
                    <p>Please fill in the details to create an account.</p>
                    <br />
                </header>

                <form className="registration-form">
                    <div className="form-group">
                        <input type="text" placeholder="Email address" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm password" />
                    </div><br />
                    <div className="form-group">
                        <button className="submit-button" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
