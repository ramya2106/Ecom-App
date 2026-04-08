// import products from '../data/products';
import ProductCard from '../components/ProductCard';
import {useSelector} from 'react-redux';
function Home(){
    const products = useSelector((state) => state.products.productList)
    return(
        <>
        <h1>Products</h1>
        <div style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px"
        }}>
           {
            products.map((product)=> (
                <ProductCard key={product.id} product={product}/>
            ))
           } 
        </div>
        </>
    )
}

export default Home