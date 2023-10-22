import './App.css';
import './FruitList';
import FruitList from './FruitList';
import SimpleformInput from './SimpleFormInput';
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
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
