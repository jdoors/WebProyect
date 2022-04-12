import React, { useReducer, useEffect } from 'react'
import { shoppingReducer, shoppingInitialState } from './ShoppingReducer';
import ProductItem from "./ProductItem";
import CartItem from './CartItem';
import { TYPES } from './ShoppingAction';
import axios from "axios";

const ShoppingCart = () => {
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

        const {products, cart} = state;

        const updateState = async () => {
          const productsURL = "http://localhost:3000/products";
          const cartURL = "http://localhost:3000/cart";
          const resProducts = await axios.get(productsURL);
          const resCart = await axios.get(cartURL);
          const newProduct = await resProducts.data;
          const newCartItem = await resCart.data;

          dispatch({type: TYPES.READ_STATE, payload: {newProduct, newCartItem}})
        }

        useEffect(() => {
          updateState()
        }, [])


        const addToCart = async (id, data) => {

          let options = {
            method: "POST",
            headers: {"content-type": "application/json"},
            data: JSON.stringify(data)
          };
          let res = await axios("http://localhost:3000/cart", options)
          console.log(res)
          

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
        <h2 className='p-1 mt-5 text-lg font-bold text-center text-white bg-orange-500 sm:text-xl sm:p-2'>Carrito de Compras</h2>
        <br/>
        <div className='grid grid-cols-6 gap-4 place-items-center'>
          <h4 className='col-span-3 font-bold text-gray-500'>Producto</h4>
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
        </div>
        <h3 className='mt-5 ml-10 text-lg font-medium'>Productos</h3>
        <article className="flex flex-wrap justify-evenly">
          {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart}/>))}
        </article>
    </div>
  )
}

export default ShoppingCart