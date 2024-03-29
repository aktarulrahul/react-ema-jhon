import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import useCart from '../../hooks/useCart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [searchProducts, setSearchProducts] = useState([]);
  const size = 10;
  useEffect(() => {
    fetch(
      `https://aktarulrahul-ema-jhon.herokuapp.com/products?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSearchProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        // console.log(key);
        const addedProduct = products.find((product) => product.key === key);
        // console.log(key, addedProduct);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const restProduct = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...restProduct, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    // const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(matchedProducts.length);
    setSearchProducts(matchedProducts);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Product"
          onChange={handleSearch}
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {searchProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={number === page ? 'selected' : ''}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="btn-product">Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
