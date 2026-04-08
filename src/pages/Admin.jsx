import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProduct} from '../redux/actions/productActions';

function Admin(){
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState('');
    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            name,
            price: Number(price),
            image
        }
        dispatch(addProduct(newProduct));
        setName('');
        setPrice('');
        setImage('');
    }
    return(
        <>
            <h1>Admin Page</h1>
            <form onSubmit = {handleAddProduct}>
                <input type="text" placeholder="Product Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="number" placeholder="Price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                <input type="text" placeholder="Image URL" value={image} onChange={(e)=> setImage(e.target.value)}/>
                <button type="submit">Add Product</button>
            </form>
        </>
    ) 
}

export default Admin