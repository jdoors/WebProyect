import React, { useReducer } from 'react'
import { shoppingReducer, shoppingInitialState } from './ShoppingReducer';
import ProductItem from "./ProductItem";
import CartItem from './CartItem';
import { TYPES } from './ShoppingAction';

const ShoppingCart = () => {
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

        const {product, cart} = state;


        const addToCart = (id) => {
          console.log(id)
          dispatch({type:TYPES.ADD_TO_CART, payload:id})
        };

        const deleteFromCart = () => {};

        const clearCart = () => {};

  return (
    <div>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <article className="flex flex-wrap justify-evenly">
          {product.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
        </article>
        <h3>Carrito</h3>
        <div className="box">
          {cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)}
        </div>
        <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  )
}

export default ShoppingCart