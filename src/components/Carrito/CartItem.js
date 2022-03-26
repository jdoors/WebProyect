const CartItem = (data, deleteFromCart) => {

    let {id, name, price} = data;

    return (
        <div style={{borderbotton: "thin solid gray"}}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button>Eliminar Item</button>
            <br/>
            <button>Eliminar Todos</button>
        </div>
    )
}

export default CartItem