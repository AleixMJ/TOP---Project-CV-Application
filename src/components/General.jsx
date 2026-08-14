import { useState } from "react";
import '../styles/General.css';

export default function General() {
    const [details, setDetails] = useState({
        name: "", surname: "", email: "", phone: ""
    });
    
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setDetails((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <div className="general-container">
            <h2>General Information</h2>
            {isEditing ? (
                <form className="general-card" onSubmit={handleSubmit}>
                    {/* Wrapped labels in basic-info to trigger the 2-column CSS Grid */}
                    <div className="basic-info">
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="name"
                                value={details.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="surname"
                                value={details.surname}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type='email'
                                name="email"
                                value={details.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={details.phone}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            ) : (
                <div className="general-preview">
                    <h3>{details.name} {details.surname}</h3>
                    <p>{details.email}</p>
                    <p>{details.phone}</p>
                    <button type="button" className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>  
                </div>
            )}
        </div>
    );
}