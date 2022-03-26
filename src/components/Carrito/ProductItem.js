
const ProductItem = ({data, addToCart}) => {
    let { id, name, price } = data;
    return (
        <div className='font-poppins w-[270px] h-[332px] text-center mt-10 items-center'>
            <div className='grid col-auto justify-center h-40 bg-[#F7F5F0] rounded-b-2xl'>
                <h4 className='mt-5 text-lg font-medium'>{name}</h4>
                <h5 className='text-2xl font-semibold text-[#FF8126] pb-[5px]'>${price}.00</h5>
                <button className="bg-[#FF8126] text-white rounded w-[230px] h-10 mb-6" onClick={() => addToCart(id)}>Agregar</button>
            </div>
        </div>
    )
}

export default ProductItem