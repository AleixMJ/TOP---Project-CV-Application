import { useState } from 'react';
import '../styles/Education.css';

export default function Education() {
    const [details, setDetails] = useState({
        qualification: '', institution: '', description: '', location:'', graduation:'current'});

    function handleChange(e) {
        const { name, value} = e.target;
        setDetails((prev) => ({...prev, [name]: value}))
    }

    return (
        <div className="education-container">
            <h2>Education</h2>
            <div className='job-card'>
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
            </div>
            
        
        </div>
    )
}