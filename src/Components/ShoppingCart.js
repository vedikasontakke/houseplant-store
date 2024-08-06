import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions';
import './ShoppingCart.css'; // Import the CSS file

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total cost: ${totalPrice.toFixed(2)}</p>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.thumbnail} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
          <div className="quantity-controls">
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <p>{item.quantity}</p>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
