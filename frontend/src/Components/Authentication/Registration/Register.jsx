import "./style.scss";
import { BASE_URL } from "../../../store/index";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Registration() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    async function submit(e) {
        e.preventDefault();

        if (await validated()) {
            try {
                const existing_users = await axios.get(`${BASE_URL}/users`);

                const lastUserId = existing_users.data.length > 0
                    ? existing_users.data[existing_users.data.length - 1].id
                    : 0;
                const newUserId = lastUserId + 1;

                await axios.post(`${BASE_URL}/users`, {
                    id: newUserId, 
                    username: form.username,
                    email: form.email,
                    password: form.password,
                });

                toast.success("Account created successfully!", { theme: "dark" });
                
                setForm({
                    username: "",
                    email: "",
                    password: "",
                    password2: "",
                });
                e.target.reset();
            } catch (error) {
                toast.error("An error occurred. Please try again.", { theme: "dark" });
            }
        }
    }

    async function validated() {
        const existing_users = await axios.get(`${BASE_URL}/users`);
        let all_emails = existing_users.data.map(user => user.email);

        const name_pattern = /^[a-zA-Z]{1,20}$/;
        const password_pattern = /^[a-zA-Z0-9]{6,30}$/;

        let result = true;
        if (!form.username.length || !form.email.length || !form.password.length || !form.password2.length) {
            result = false;
            toast.error("All fields are required.", { theme: "dark" });
        } else if (!name_pattern.test(form.username)) {
            result = false;
            toast.error("Invalid username.", { theme: "dark" });
        } else if (all_emails.includes(form.email)) {
            result = false;
            toast.error("Email already exists.", { theme: "dark" });
        } else if (!password_pattern.test(form.password)) {
            result = false;
            toast.error("Invalid password.", { theme: "dark" });
        } else if (form.password !== form.password2) {
            result = false;
            toast.error("Passwords do not match.", { theme: "dark" });
        }
        return result;
    }

    function handleFormInformation(e) {
        const { value, name } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }

    return (
        <div className="registration-container">
            <div className="registration-form-container">
                <header>
                    <h2>Create Account</h2>
                    <br />
                    <p>Please fill in the details to create an account.</p>
                    <br />
                </header>

                <form onSubmit={submit} className="registration-form">
                    <div className="form-group">
                        <input type="text" placeholder="Username" name="username" onChange={handleFormInformation} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Email address" name="email" onChange={handleFormInformation} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password" onChange={handleFormInformation} />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Confirm password" name="password2" onChange={handleFormInformation} />
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="submit-button" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
