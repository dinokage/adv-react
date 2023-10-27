import './App.css';
import './FruitList';
import FruitList from './FruitList';
import SimpleformInput from './SimpleFormInput';
import ToggleButton from './ToggleButton';
import RandomUserData from './RandomUserData';
import MyWallet from './MyWallet';
import Radiogroup from './Radio/RadioGroup';
import { UserContext } from './Contexts';
import { useState } from 'react';
function App() {
  const [user] = useState('pewpew')
  const radioButtonProps = [{
    id:"red",
    value:"green",
    name:"color"
  },
  {
    id:"blue",
    value:"blue",
    name: "color"
  }
]
  return (
    <div>
      <h1>Votkay fruitShop</h1>
      <UserContext.Provider value={user}>
      <FruitList />
      <SimpleformInput />
      <ToggleButton />
      <RandomUserData />
      <MyWallet />
      <Radiogroup props={radioButtonProps} />
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
