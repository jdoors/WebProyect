import React, { useReducer, useEffect } from 'react'
import { shoppingReducer, shoppingInitialState } from '../Carrito/ShoppingReducer';
import Product from '../Carrito/Product';
import { TYPES } from '../Carrito/ShoppingAction';
import axios from "axios";

    

const Productos = () => {

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

return (
    
    <div>
        
          <h3 className='pt-5 text-lg font-medium ml-60' >Productos</h3>
          <article className="flex flex-wrap justify-evenly">
          {products.map((product) => (<Product key={product.id} data={product} addToCart={addToCart}/>))}
        </article>
    </div>

)}

export default Productos