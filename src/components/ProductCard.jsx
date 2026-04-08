import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions/cartActions';

function ProductCard({product}){
    const dispatch = useDispatch();
    return (
        <div 
            style = {{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                width: "220px",
                textAlign: "center"
            }}> 
            <img src={product.image} alt={product.name} style={{width: "100%", borderRadius: "10px"}}/>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button
            onClick={()=> dispatch(addToCart(product))} style={{
                padding: "10px 15px",
                border: "none",
                color: "white",
                background: "green",
                borderRadius: "5px",
                cursor: "pointer"
            }}>Add to Cart</button>
        </div >
    )
}

export default ProductCard