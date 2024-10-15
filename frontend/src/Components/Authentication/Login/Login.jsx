import "./style.scss";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../store/index";

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.get(`${BASE_URL}/users`);
            const user = response.data.find(
                (user) => user.email === form.email && user.password === form.password
            );

            if (user) {
                toast.success("Login successful!", { theme: "dark" });
                await updateLoggedUsers(user);
            } else {
                toast.error("Account does not exist or incorrect password.", { theme: "dark" });
            }
        } catch (error) {
            toast.error("An error occurred while logging in. Please try again.", { theme: "dark" });
        }
    }

    async function updateLoggedUsers(user) {
        try {
            const response = await axios.get(`${BASE_URL}/loggedUsers`);
            const loggedUsers = response.data;

            const newId = loggedUsers.length > 0 ? Math.max(...loggedUsers.map(u => u.id)) + 1 : 1;

            await axios.post(`${BASE_URL}/loggedUsers`, {
                id: newId,
                username: user.username,
                email: user.email,
                loginTime: new Date().toISOString(),
            });
        } catch (error) {
            toast.error("Failed to update logged users.", { theme: "dark" });
        }
    }

    function handleFormInformation(e) {
        const { value, name } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    return (
        <div className="login-container">
            <div className="login-form-container">
                <header>
                    <h2>Login</h2>
                </header>
                <br />
                <form className="login-form" onSubmit={submit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Email address"
                            name="email"
                            onChange={handleFormInformation}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleFormInformation}
                        />
                    </div><br />
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

