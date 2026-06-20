import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router'
import './App.css'

function App() {
    const [products, setproducts] = useState([]);
    const [isActive, setisActive] = useState(true);

    useEffect(() => {
        const getProduct = async (id) => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            let product = await response.json();
            product = {...product, 'amount': 0, 'inCart': false};

            if (isActive) {
                setproducts([...products, product]);
            }
        }

        getProduct();
        return () => {
            setisActive(false);
        }
    }, []);

    // clickhandler

    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </nav>
            <Outlet context={products}/>
        </div>
    )
}

export default App
