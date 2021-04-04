import React from 'react';
import './Cart.css';

const Cart = ({ items, setItems, cartActive, setCartActive }) => {
  let [total, setTotal] = React.useState(0);

  const removeItem = (index) => {
    console.log(index);
    let auxArray = items;
    auxArray.splice(index, 1);
    setItems([...auxArray]);
  };

  const calculateTotal = (items) => {
    let totalPrice = 0;
    if (items.length) {
      items.forEach((item) => {
        totalPrice += +item.price * item.qty;
      });
      setTotal(totalPrice);
    } else {
      setTotal(0);
    }
  };

  React.useEffect(() => {
    calculateTotal(items);
  }, [items]);

  return (
    <section className={`cart ${cartActive ? 'is-active' : ''}`}>
      <div className="cart-container">
        <button className="cart-close" onClick={() => setCartActive(false)}>
          X
        </button>
        <h2 className="cart-title">Cart</h2>
        {items.length ? (
          <div>
            <ul className="cart-list">
              {items.map((item, index) => (
                <li className="cart-item">
                  <p>{item.name}</p>
                  <p className="cart-qty">{item.qty}</p>
                  <button className="btn" onClick={() => removeItem(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="cart-total">Valor total: R$ {total}</p>
          </div>
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
