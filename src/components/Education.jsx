import { useState } from 'react';
import '../styles/Education.css';

export default function Education() {
    const [details, setDetails] = useState({
        qualification: '', institution: '', description: '', location:'', graduation:'current'});

    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const { name, value} = e.target;
        setDetails((prev) => ({...prev, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <div className="education-container">
           
                <h2>Education</h2>
                 {isEditing ? (
                <form className='education-card'>
                    <div className='basic-info'>
                        <label>
                            Qualification: 
                            <input 
                            type="text"
                            name="qualification"
                            onChange={handleChange}
                            value={details.value}                 
                            />
                        </label>
                        <label>
                            Institution Name: 
                            <input 
                            type="text"
                            name="institution"
                            onChange={handleChange}
                            value={details.value}                 
                            />
                        </label>
                        <label>
                            Graduation Date: 
                            <input 
                            type="text"
                            name="graduation"
                            onChange={handleChange}
                            value={details.value}                 
                            />
                        </label>
                        <label>
                            Location: 
                            <input 
                            type="text"
                            name="location"
                            onChange={handleChange}
                            value={details.value}                 
                            />
                        </label>
                    </div>
                        <label>
                            Description: 
                            <input 
                            type="text"
                            name="description"
                            onChange={handleChange}
                            value={details.value}                 
                            />
                        </label>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
                ) : (
                <div className='education-card preview'>
                    <div className='education-title'>
                        <h3>{details.qualification}</h3>
                        <p>{details.graduation}</p>
                    </div>
                    <p>{details.institution} {details.location && `, ${details.location}`}</p>
                    <p>{details.description}</p>
                    <button type="submit" onClick={() => setIsEditing(true)}>Edit</button>
                </div>
                )}                      
        </div>
    )
}