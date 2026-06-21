import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router'
import { NO_OF_PRODUCTS } from './components/config';
import './App.css'

function App() {
    const [products, setproducts] = useState([]);

    let itemsInCart = 0;
    products.map(p => {
        if (p.inCart) ++itemsInCart;
    });

    useEffect(() => {
        let isActive = true;
        const getProduct = async (id) => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            let product = await response.json();
            product = {...product, 'amount': 0, 'inCart': false};

            if (isActive) {
                setproducts(ps => [...ps, product]);
            }
        }
        
        for (let i = 1; i <= NO_OF_PRODUCTS; i++) {
            getProduct(i);
        }

        return () => {
            isActive = false;
        }
    }, []);

    // clickhandler
    const handleAmt = (id, amount) => {
        if (amount < 0) {
            alert("Cannot buy negative amount of items");
            return;
        }
        
        const copy_prod = [...products];
        copy_prod.map(p => {
            if (p.id === id) {
                p.amount = amount;
                if (amount > 0) p.inCart = true;
                else p.inCart = false;
            }
        })

        setproducts(copy_prod);
    }

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart ({itemsInCart} items)</Link>
            </nav>
            <Outlet context={{products, handleAmt, itemsInCart}}/>
        </div>
    )
}

export default App
