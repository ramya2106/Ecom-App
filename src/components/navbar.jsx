import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Navbar(){
    const cartItems = useSelector((state)=> state.cart.cartItems);

    const totalCount = cartItems.reduce((acc,item) => acc + item.qty, 0);

    return(
        <nav style={{
           display: "flex",
           justifyContent: "space-between",
           padding:"15px 20px",
           background: "#222",
           color: "#fff"
        }}>
            <h2>Redux Shop</h2>
            <div style={{display: "flex", gap: "20px"}}>
                <Link to="/" style={{color: "#fff", textDecoration: "none"}}>Home</Link>
                <Link to="/cart" style={{color: "#fff", textDecoration: "none"}}>Cart ({totalCount})</Link>
                <Link to="/admin" style={{color: "#fff", textDecoration: "none"}}>Admin</Link>
            </div>
        </nav>
    )
}
export default Navbar