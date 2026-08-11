import { useState } from 'react';
import '../styles/Work.css';

export default function Work() {
    const [details, setDetails] = useState({
        title: '', company: '', description: '', location:''});

    function handleChange(e) {
        const { name, value} = e.target;
        setDetails((prev) => ({...prev, [name]: value}))
    }

    return (
        <div className="container-work">
            <h2>Work Experience</h2>
            <div className='job-card'>
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