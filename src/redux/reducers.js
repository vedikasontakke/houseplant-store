import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
  } from './actions';
  
  const initialState = {
    products: [
      { id: 1, name: 'Aloe Vera', price: 10, thumbnail: '/assets/aloe.jpeg', category: 'Succulents' },
      { id: 2, name: 'Snake Plant', price: 15, thumbnail: '/assets/snake.jpeg', category: 'Succulents' },
      { id: 3, name: 'Peace Lily', price: 12, thumbnail: '/assets/peace.jpeg', category: 'Flowering' },
      { id: 4, name: 'Spider Plant', price: 8, thumbnail: '/assets/spider.jpeg', category: 'Air Purifying' },
      { id: 5, name: 'Fiddle Leaf Fig', price: 25, thumbnail: '/assets/fiddle.jpeg', category: 'Air Purifying' },
      { id: 6, name: 'ZZ Plant', price: 20, thumbnail: '/assets/zz.jpeg', category: 'Low Light' },
    ],
    cart: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      case INCREASE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case DECREASE_QUANTITY:
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  