import { useState } from 'react';
import '../styles/Education.css';

export default function Education() {
    const [educationList, setEducationList] = useState([{
        id: crypto.randomUUID(),
        qualification: '',
        institution: '',
        description: '',
        location:'',
        graduation:'',
        isEditing: true,
        },
    ]);


    function handleChange(e, id) {
        const { name, value} = e.target;
        setEducationList((prev) =>
            prev.map((item) => item.id === id ? ({...item, [name]: value} ): item 
            )
        );
    }

    function handleSubmit(e, id) {
        e.preventDefault();

        setEducationList((prev) =>
            prev.map((item) => item.id === id ? {...item, isEditing: false} : item
            )
    
        );
        
    }

        function handleEdit(id) {
        setEducationList((prev) =>
            prev.map((item) =>
            item.id === id ? {...item, isEditing: true} :item
            )
        );
        
    }

    function handleAdd() {
        setEducationList((prev) => [
            ...prev,
            {
            id: crypto.randomUUID(),
            qualification: '',
            institution: '',
            description: '',
            location:'',
            graduation:'',
            isEditing: true,
            },
        ]);
    }

    function handleDelete(id) {
        setEducationList((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <div className="education-container">
        
        
            <h2>Education</h2>
            {educationList.map((item) =>
                item.isEditing ? (
                <form key={item.id}className='education-card' onSubmit={ (e) => handleSubmit(e, item.id)}>
                    <div className='basic-info'>
                        <label>
                            Qualification:  
                            <input 
                            type="text"
                            name="qualification"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.qualification}                 
                            />
                        </label>
                        <label>
                            Institution: 
                            <input 
                            type="text"
                            name="institution"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.institution}                    
                            />
                        </label>
                        <label>
                            Graduation date: 
                            <input 
                            type="text"
                            name="graduation"
                            onChange={ (e) => handleChange(e, item.id)}
                            value={item.graduation}                  
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
                <div key={item.id} className='education-card preview'>
                    <div className='education-title'>
                        <h3>{item.qualification || 'Qualification'}</h3>
                         <p>{item.graduation}</p>
                    </div>
                    <p>{item.institution} {item.location && `, ${item.location}`}</p>   
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
            + Add Qualification
        </button>
    </div>   
    );
}