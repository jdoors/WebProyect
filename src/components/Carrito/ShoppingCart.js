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
    <div className='mb-8'>
        <h2 className='mt-5 text-lg sm:text-xl font-bold bg-orange-500 text-white text-center p-1 sm:p-2'>Carrito de Compras</h2>
        <br/>
        <div className='grid grid-cols-6 place-items-center gap-4'>
          <h4 className='font-bold text-gray-500 col-span-3'>Producto</h4>
          <h4 className='font-bold text-gray-500'>Cantidad</h4>
          <h4 className='font-bold text-gray-500'>Precio Unitario</h4>
          <h4 className='font-bold text-gray-500'>Precio Total</h4>
        </div>
        <br/>
        <div className="flex flex-col">
          {cart.map((item, index) => <CartItem key={index} data={item} addToCart={addToCart} deleteFromCart={deleteFromCart}/>)}
        </div>
        <div className='flex items-center justify-evenly'>
          <button className=" bg-slate-400 border-slate-600 border rounded w-[230px] h-10 font-bold" onClick={clearCart}>Limpiar Carrito</button>
          <div className="rounded bg-green-300 border w-60 font-bold h-10 text-center pt-[6px]">
            {/* Acá iría el cálculo del costo total de la compra, debería ir sumando los precios totales de cada producto (y restando si se eliminan) */}
            <h4>Total Compra: $.00</h4> 
          </div>
        </div>
        <h3 className='mt-5 ml-10 text-lg font-medium'>Productos</h3>
        <article className="flex flex-wrap justify-evenly">
          {product.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
        </article>
    </div>
  )
}

export default ShoppingCart