// import logo from './logo.svg';
import { useState, useEffect} from 'react';
import './App.css';

function App() {
  const actor = ['Jasim', 'Alomgir', 'Bapparaz', 'Siam']
  const products = [
    {name:'PhotoShop', price:'$90'},
    {name:'Illustrator', price:'$100'},
    {name:'Adobe Rr', price:'$50'},
    {name:'AngularJS', price:'$69'}
];
actor.map(actors => actors);
products.map(product => product);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            actor.map(actors => <li>{actors}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          </ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
        
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
      </header>
    </div>
  );
}

function Counter(){
  const[count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick= {() =>setCount(count + 1)}>Increase</button>
      <button onClick= {() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
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

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'salmon',
    height:'200px',
    width:'200px',
    // float:'left',
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h4>Name: {name}</h4>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
