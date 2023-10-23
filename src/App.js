import './App.css';
import './FruitList';
import FruitList from './FruitList';
import SimpleformInput from './SimpleFormInput';
import ToggleButton from './ToggleButton';
import RandomUserData from './RandomUserData';
import { UserContext } from './Contexts';
import { useState } from 'react';
function App() {
  const [user] = useState('pewpew')
  return (
    <div>
      <h1>Votkay fruitShop</h1>
      <UserContext.Provider value={user}>
      <FruitList />
      <SimpleformInput />
      <ToggleButton />
      <RandomUserData />
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
