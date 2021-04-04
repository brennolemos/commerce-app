import React from 'react';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';

import Products from './Components/Products';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartActive, setCartActive] = React.useState(false);

  return (
    <div className="App">
      <Header setCartActive={setCartActive} />
      <Products items={items} addCart={setItems} />
      <Cart
        items={items}
        setItems={setItems}
        cartActive={cartActive}
        setCartActive={setCartActive}
      />
    </div>
  );
}

export default App;
