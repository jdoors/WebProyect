const CartItem = ({data, deleteFromCart, addToCart}) => {

    let {id, name, price, quantity} = data;

    return (
        <div className='font-poppins mb-10 bg-yellow-200 grid grid-cols-6 place-items-center gap-4 w-full'>
            <div className='col-span-3 flex flex-col items-center gap-4 py-4'>
                <h4 className='text-lg font-medium'>{name}</h4>
                <button className="bg-red-400 text-white rounded w-28 h-8" onClick={() => deleteFromCart(id, true)}>Remove</button>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-red-400 text-white rounded w-5 h-5" onClick={() => deleteFromCart(id)}>-</button>
                <h5 className="mx-4">
                    {quantity}
                </h5>
                <button className="bg-green-400 text-white rounded w-5 h-5" onClick={() => addToCart(id)}>+</button>
            </div>
            <div>
                <h5>
                    ${price}.00
                </h5>
            </div>
            <div>
                <h5>
                    ${price * quantity}.00
                </h5>
            </div>
        </div>
    )
}

export default CartItem