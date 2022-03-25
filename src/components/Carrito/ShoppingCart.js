import React, { useReducer } from 'react'
import { shoppingReducer, shoppingInitialState } from './ShoppingReducer';
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

        const {product, cart} = shoppingInitialState;

        const addToCart = (id) => {};
        const deleteFromCart = () => {};
        const clearCart = () => {};

  return (
    <div>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <article className="box">
            {product.map((product) => <ProductItem key={product.id} data={product} addToCart={addToCart}/>)}
        </article>
        <h3>Carrito</h3>
        <article className="box"></article>
    </div>
  )
}

export default ShoppingCart