import './App.css';
import './FruitList';
import FruitList from './FruitList';
import SimpleformInput from './SimpleFormInput';
import { contextExample } from './Contexts';
function App() {
  return (
    <div>
      <h1>Votkay fruitShop</h1>
      <contextExample.Provider>
      <FruitList />
      <SimpleformInput />
      </contextExample.Provider>
      
    </div>
  );
}

export default App;
