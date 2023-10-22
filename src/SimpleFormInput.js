import { useState } from 'react';
export default function SimpleformInput() {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`form submitted with data ${value}`)
        
    }
    return ( 
        <>
        <p>{value}</p>
        <form onSubmit={handleSubmit}> 
          <input 
            value={value} 
            onChange={handleChange} 
            type="text" 
          /> 
          <button type ="submit">submit</button>
        </form> 
        </>
      ); 
     }; 