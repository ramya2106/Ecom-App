import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from '../redux/actions/cartActions';

function Cart(){
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc,item) => acc + item.price * item.qty,0);

    return (
        <>
            <h1>Cart Page</h1>
            {cartItems.length  === 0 ? (
                <h3>Your Cart is empty</h3>
            ) : (
                <>
                {cartItems.map((item)=> (
                    <div>
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.qty}</p>
                        <p>Subtotal: {item.price * item.qty}</p>
                        <button onClick={()=> dispatch(removeFromCart(item.id))}>Remove</button>

                    </div>
                ))}
                <h2>Total: {totalPrice}</h2>
                </>
            )}
        </>
    )
}

export default Cart