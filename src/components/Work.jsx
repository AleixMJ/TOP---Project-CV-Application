import { useState } from 'react';
import '../styles/Work.css';

export default function Work() {
    const [workList, setWorkList] = useState([{
        id: crypto.randomUUID(),
        title: '',
        company: '',
        description: '',
        location:'',
        start:'',
        end:'current',
        isEditing: true,
        },
    ]);


    function handleChange(e, id) {
        const { name, value} = e.target;
        setWorkList((prev) => 
            prev.map((item) =>
            item.id === id ? {...item, [name]: value} : item
            )
        );
    }

    function handleSubmit(e, id) {
        e.preventDefault();

        setWorkList((prev) =>
            prev.map((item) =>
            item.id === id ? {...item, isEditing: false} :item
            )
        );
        
    }

    function handleEdit(id) {
        setWorkList((prev) =>
            prev.map((item) =>
            item.id === id ? {...item, isEditing: true} :item
            )
        );
        
    }

    function handleAdd() {
        setWorkList((prev) => [
            ...prev,
            {
            id: crypto.randomUUID(),
            title: '',
            company: '',
            description: '',
            location: '',
            start: '',
            end: 'current',
            isEditing: true,
            },
        ]);
    }

    function handleDelete(id) {
        setWorkList((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <div className="work-container">
        
        
            <h2>Work Experience</h2>
            {workList.map((item) =>
                item.isEditing ? (
                <form key={item.id}className='job-card' onSubmit={ (e) => handleSubmit(e, item.id)}>
                    <div className='basic-info'>
                        <label>
                            Job Title: 
                            <input 
                            type="text"
                            name="title"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.title}                 
                            />
                        </label>
                        <label>
                            Company: 
                            <input 
                            type="text"
                            name="company"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.company}                    
                            />
                        </label>
                        <label>
                            Start date: 
                            <input 
                            type="text"
                            name="start"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.start}                  
                            />
                        </label>
                        <label>
                            End date: 
                            <input 
                            type="text"
                            name="end"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.end}                    
                            />
                        </label>
                        <label>
                            Location: 
                            <input 
                            type="text"
                            name="location"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.location}                   
                            />
                        </label>
                    </div>
                    <label>
                        Description: 
                        <input 
                        type="text"
                        name="description"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.description}                    
                        />
                    </label>
                    <button type="submit" className='submit-btn'>Submit</button>
                    <button type="button" className='delete-btn' onClick={() => handleDelete(item.id)}>
                        Delete
                    </button>

                </form> 
            ) : ( 
                <div key={item.id} className='job-card preview'>
                    <h3>{item.title || 'Job Ttle'}</h3>
                    <p className='company-location'>
                        {item.company} {item.location && `| ${item.location}`}
                    </p>
                    <p className='dates'>
                        {item.start} - {item.end}
                    </p>
                    <p className='description'>{item.description}</p>
                    <button type="button" className="edit-btn" onClick={() => handleEdit(item.id)}>
                        Edit
                    </button>
                    <button type="button" className='delete-btn' onClick={() => handleDelete(item.id)}>
                        Delete
                    </button>
                </div>
            )    
        )}
        <button type="button" className='add-btn' onClick={handleAdd}>
            + Add Experience
        </button>
    </div>   
    );
}