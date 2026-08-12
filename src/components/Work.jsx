import { useState } from 'react';
import '../styles/Work.css';

export default function Work() {
    const [details, setDetails] = useState({
        title: '',
        company: '',
        description: '',
        location:'',
        start:'',
        end:'current'});

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
        <div className="work-container">
        
        
            <h2>Work Experience</h2>

            {isEditing ? (
                <form className='job-card' onSubmit={handleSubmit}>
                    <div className='basic-info'>
                        <label>
                            Job Title: 
                            <input 
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={details.value}                 
                            />
                        </label>
                        <label>
                            Company: 
                            <input 
                            type="text"
                            name="company"
                            onChange={handleChange}
                            value={details.value}                 
                            />
                        </label>
                        <label>
                            Start date: 
                            <input 
                            type="text"
                            name="start"
                            onChange={handleChange}
                            value={details.value}                 
                            />
                        </label>
                        <label>
                            End date: 
                            <input 
                            type="text"
                            name="start"
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
                    <button type="submit" className='submit-btn'>Submit</button>

                </form> 
            ) : ( 
                <div className='job-card preview'>
                    <h3>{details.title || 'Job Ttle'}</h3>
                    <p className='company-location'>
                        {details.company} {details.location && `| ${details.location}`}
                    </p>
                    <p className='dates'>
                        {details.start} - {details.end}
                    </p>
                    <p className='description'>{details.description}</p>
                    <button type="button" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </div>

            )}
        </div>
    );
}