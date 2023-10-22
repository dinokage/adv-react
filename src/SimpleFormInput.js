import { useState, useContext } from 'react';
import { UserContext } from './Contexts';
export default function SimpleformInput() {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`form submitted with data ${value}`)
        
    }
    const tempVariable = useContext(UserContext)
    return ( 
        <>
        {tempVariable}
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