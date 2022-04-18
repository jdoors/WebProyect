import React, { useReducer, useEffect } from 'react'
import { shoppingReducer, shoppingInitialState } from './ShoppingReducer';
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


        const addToCart = async (data) => {

          let newItem = state.products.find(product => product.id === data.id)

          let iteminCart = state.cart.find(item => item.id === newItem.id)

          if (iteminCart) {
            let endpoint = `http://localhost:3000/cart/${data.id}`

            let options = {
              method: 'PUT',
              headers: {"content-type": "application/json"},
              data: JSON.stringify({...data, quantity: iteminCart.quantity + 1})
            },
            res = await axios(endpoint, options),
            itemData = await res.data

            dispatch({type:TYPES.ADD_TO_CART, payload: {itemData}})

          } else {
            let options = {
              method: "POST",
              headers: {"content-type": "application/json"},
              data: JSON.stringify({...data, quantity: 1})
            };

            let res = await axios("http://localhost:3000/cart", options),
            itemData = await res.data
  
            dispatch({type:TYPES.ADD_TO_CART, payload: {itemData}})
          }
        };

        const deleteFromCart = async (data, all = false) => {
          if(all) {
            let endpoint = `http://localhost:3000/cart/${data.id}`

            let options = {
              method: "DELETE",
              headers: {"content-type": "application/json"}
            },
            res = await axios(endpoint, options)

            dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: data.id});

          } else {

            let iteminCart = state.cart.find(item => item.id === data.id)

            if (iteminCart.quantity > 1) {
              let endpoint = `http://localhost:3000/cart/${data.id}`

              let options = {
                method: "PUT",
                headers: {"content-type": "application/json"},
                data: JSON.stringify({...data, quantity: iteminCart.quantity - 1})
              },
              res = await axios(endpoint, options)

              dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id});

            } else {
              let endpoint = `http://localhost:3000/cart/${data.id}`

              let options = {
                method: "DELETE",
                headers: {"content-type": "application/json"}
              },
              res = await axios(endpoint, options)
  
              dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id});
            }


          }
        };

        

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
        
    </div>
  )
}

export default ShoppingCart