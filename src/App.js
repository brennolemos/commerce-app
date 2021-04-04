import React from 'react';
import './App.css';
import Cart from './Components/Cart';

import Products from './Components/Products';

function App() {
  const [items, setItems] = React.useState([]);

  return (
    <div className="App">
      <Products items={items} addCart={setItems} />
      <Cart setItems={setItems} items={items} />
    </div>
  );
}

export default App;
