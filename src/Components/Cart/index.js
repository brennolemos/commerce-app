import React from 'react';

const Cart = ({ items, setItems }) => {
  let [total, setTotal] = React.useState(0);

  const removeItem = (index) => {
    console.log(index);
    let auxArray = items;
    auxArray.splice(index, 1);
    console.log(auxArray);
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
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item, index) => (
          <li>
            {item.name} - {item.qty} -
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      Valor total: {total}
    </div>
  );
};

export default Cart;
