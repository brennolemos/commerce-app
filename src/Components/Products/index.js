import React from 'react';
import axios from 'axios';

const Products = ({ items, addCart }) => {
  const [products, setProducts] = React.useState([]);

  function checkAndAdd(product) {
    let auxArray = items;
    for (var i = 0; i < auxArray.length; i++) {
      if (auxArray[i].name === product.name) {
        auxArray[i].qty++;
        addCart([...auxArray]);
        return; // exit loop and function
      }
    }
    auxArray.push({ ...product, qty: 1 });
    addCart([...auxArray]);
  }

  const addProduct = () => {
    axios
      .post(`https://6069bc22e1c2a10017544db7.mockapi.io/products`)
      .then((response) => getProducts());
  };

  const getProducts = () => {
    axios
      .get(`https://6069bc22e1c2a10017544db7.mockapi.io/products`)
      .then((response) => setProducts(response.data));
  };

  const removeProduct = (id) => {
    axios
      .delete(`https://6069bc22e1c2a10017544db7.mockapi.io/products/${id}`)
      .then((response) => getProducts());
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => checkAndAdd(product)}>Buy</button>
                  <button onClick={() => removeProduct(product.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button onClick={addProduct}>Adicionar produto</button>
    </div>
  );
};

export default Products;
