import logo from './logo.svg';
import './App.css';
import Task1 from './Component/task1.js';
function App() {
  const products = [
    {
      id: 1,
      tittle:"product1",
      amount: 10,
    },  {
      id: 2,
      tittle:"product1",
      amount: 10,
    },  {
      id: 1,
      tittle:"product2",
      amount: 10,
    },  {
      id: 3,
      tittle:"product3",
      amount:10,
    },
  ];
  return (
  
   <Task1 item={products}/>
   
  );
}

export default App;
