import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import './ProductListing.css'; // Import the CSS file

const ProductListing = () => {
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {['Succulents', 'Flowering', 'Air Purifying', 'Low Light'].map(category => (
        <div className="category" key={category}>
          <h3>{category}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products.filter(product => product.category === category).map(product => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.name} />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  disabled={isInCart(product.id)}
                >
                  {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
