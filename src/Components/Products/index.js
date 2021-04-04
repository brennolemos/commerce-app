import React from 'react';
import axios from 'axios';
import './Products.css';

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
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
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
    <section className="products">
      {products &&
        products.map((product) => (
          <div className="product" key={product.id}>
            <img className="product-image" src={product.image} alt="" />
            <div className="product-info">
              <span className="product-price">R$ {product.price}</span>
              <h2 className="product-title">{product.name}</h2>
              <button
                className="btn btn--product"
                onClick={() => checkAndAdd(product)}
              >
                + Buy
              </button>
              <button
                className="btn btn--product"
                onClick={() => removeProduct(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

      <div style={{ textAlign: 'center' }}>
        <button className="btn" onClick={addProduct}>
          Adicionar produto
        </button>
      </div>
    </section>
  );
};

export default Products;
