import { useState } from "react";
import "./style.scss";

function CreatePortfolio({ onAddPortfolio }) {
    const [form, setForm] = useState({
        name: "",
        category: "",
        description: "",
        image: "",
    });

    function submit(e) {
        e.preventDefault();
        const newPortfolio = {
            ...form,
            id: Date.now(),
            likes: 0,
            views: 0
        };

        const file = form.image;
        const reader = new FileReader();
        reader.onloadend = () => {
            newPortfolio.image = reader.result;
            onAddPortfolio(newPortfolio);

            setForm({
                name: "",
                category: "",
                description: "",
                image: "",
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            onAddPortfolio(newPortfolio);
        }

        setForm({
            name: "",
            category: "",
            description: "",
            image: "",
        });
    }

    function handleFormChange(e) {
        const { name, value } = e.target;

        if (name !== 'image') {
            setForm({ ...form, [name]: value });
        } else {
            const file = e.target.files[0];
            setForm({ ...form, [name]: file });
        }
    }

    return (
        <div className="create-portfolio-wrapper">
            <h1>Create Your Portfolio</h1>
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="name">Portfolio Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="category">Portfolio Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="description">Portfolio Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={form.description}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="product-image">Image</label>
                    <input
                        id="product-image"
                        onChange={handleFormChange}
                        type="file"
                        name="image"
                        accept="image/*"
                        style={{ height: "50px" }}
                    />
                    <img src={form.image ? URL.createObjectURL(form.image) : null} style={{ maxHeight: "100px" , marginTop: "10px", borderRadius: "5px"}} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreatePortfolio;

