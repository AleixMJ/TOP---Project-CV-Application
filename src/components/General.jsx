import { useState } from "react";
import '../styles/General.css';

export default function General() {
    const [details, setDetails] = useState({
        name:"", surname:"", email:"", phone:""})
    
    function handleChange(e) {
        const { name, value} = e.target;
        setDetails((prev) => ({...prev, [name]: value}))
    }

    return (
    <div className="general-container">
        <h2>General Information</h2>
        <label>
            First Name:
            <input
                name="name"
                value={details.name}
                onChange={handleChange}
            />
        </label>
        <label>
            Last Name:
            <input
                name="surname"
                value={details.surname}
                onChange={handleChange}
            />
        </label>
        <label>
            Email:
            <input
                name="email"
                value={details.email}
                onChange={handleChange}
            />
        </label>
        <label>
            Phone:
            <input
                name="phone"
                value={details.phone}
                onChange={handleChange}
            />
        </label>
    </div>
    )
}