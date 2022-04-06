const CartItem = ({data, deleteFromCart, addToCart}) => {

    let {id, name, price, quantity} = data;

    return (
        <div className='font-poppins w-[270px] h-[200px] text-center mt-10 ml-4 items-center bg-slate-400'>
            <div className='grid justify-center h-40 col-auto rounded-b-2xl'>
                <h4 className='mt-5 text-lg font-medium'>{name}</h4>
                <h5>
                    {quantity}
                </h5>
                <h5>
                    ${price * quantity}.00
                </h5>
                <button className="bg-[#FF8126] text-white rounded w-[20px] h-10 mb-6" onClick={() => deleteFromCart(id)}>-</button>
                <button className="bg-[#FF8126] text-white rounded w-[20px] h-10 mb-6" onClick={() => addToCart(id)}>+</button>
                <br/>
                <button className="bg-[#FF8126] text-white rounded w-[230px] h-10" onClick={() => deleteFromCart(id, true)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem