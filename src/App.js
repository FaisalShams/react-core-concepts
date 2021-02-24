import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alamgir', 'Salman', 'Shuvo', 'Bappi']
  const products = [
    {name: 'Photoshop', price: '€90.99'},
    {name: 'Illustrator', price: '€60.99'},
    {name: 'PDF Reader', price: '€6.99'},
    {name: 'Premier El', price: '€249.99'},
  ]
  const productNames = products.map(product => product.name);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>

        <p>My first React Paragraph</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
          
        <Counter></Counter>
        <Users></Users>
        <Product Product={products[0]}></Product>
        <Product Product={products[1]}></Product>
        <Person name ="Rubel Hossain"></Person>
        <Person></Person>
        <Person></Person>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}




function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}






function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1) }>Decrease</button>
      <button onClick={ () => setCount(count + 1) }>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.Product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
  
}

function Person (props) {
  return (
  <div style={{border: '2px solid red', margin: '10px'}}>
    <h1>{props.name}</h1>
    <h3>The Boss</h3>
  </div>
  )
}

export default App;
