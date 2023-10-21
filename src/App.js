import './App.css';

const topFruits = [
  {
    id:1,
    name: "nimmakay",
    description: "pullaga untadhi",
    price: 69.50
  },
  {
    id:2,
    name: "danimmakay",
    description: "erraga untadhi",
    price: 699.50
  },
  {
    id:3,
    name: "usirikay",
    description: "baaga pullaga untadhi",
    price: 669.50
  },
  {
    id:4,
    name: "vattakay",
    description: "chinnaga untadhi",
    price: 469.50
  }
];

function App() {
  const fruitsList = topFruits.map(fruit => {
    const data = `${fruit.name} - ${fruit.price}`
    return <li>{data}</li>
  })
  return (
    <div className="App">
      <h1>Votkay fruitShop</h1>
      <ul>
        {fruitsList}
      </ul>
    </div>
  );
}

export default App;
