import React, { useReducer } from 'react'
import { shoppingReducer, shoppingInitialState } from './ShoppingReducer';
import ProductItem from "./ProductItem";
import CartItem from './CartItem';
import { TYPES } from './ShoppingAction';

const ShoppingCart = () => {
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

        const {product, cart} = state;


        const addToCart = (id) => {
          dispatch({type:TYPES.ADD_TO_CART, payload:id})
        };

        const deleteFromCart = (id, all = false) => {
          if(all) {
            dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id});
          } else {
            dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id});
          }
        };

        const clearCart = () => {dispatch({type: TYPES.CLEAR_CART})};

  return (
    <div>
        <h2 className='mt-5 ml-10 text-lg font-medium'>Carrito de Compras</h2>
        <h3 className='mt-5 ml-10 text-lg font-medium'>Productos</h3>
        <article className="flex flex-wrap justify-evenly">
          {product.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
        </article>
        <h3 className='mt-5 ml-10 text-lg font-medium'>Carrito</h3>
        <div className="flex flex-wrap justify-center">
          {cart.map((item, index) => <CartItem key={index} data={item} addToCart={addToCart} deleteFromCart={deleteFromCart}/>)}
        </div>
        <button className="bg-[#FF8126] text-white rounded w-[230px] h-10 ml-5 mt-5" onClick={clearCart}>Limpiar Carrito</button>
    </div>
  )
}

export default ShoppingCart