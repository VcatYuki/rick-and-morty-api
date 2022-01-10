const ProductItem = ({data, addToCart}) => {
    let {id, name, price} = data;
    return (
        <div style={{border:"thin solid gray", padding:"1rem"}}>
            <h4>{name}</h4>
            <h3>{price}.00</h3>
            <button onClick={() => addToCart(id)}>Add</button>
            </div>
    )
};
export default ProductItem;
