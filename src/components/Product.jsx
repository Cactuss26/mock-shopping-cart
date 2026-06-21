import { useState } from "react";

// info -> id, title, price, description, category, image, probably rating, (amount, and inCart)
export const Product = ({ info, handleAmt }) => {
    const [amount, setAmount] = useState(info.amount);
    
    const handlePlus = () => {
        setAmount(amount + 1);
    }

    const handleMinus = () => {
        if (amount > 0) {
            setAmount(amount - 1);
        }
        else alert("Already at zero");
    }

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <div>
            <div>
                <h1>{info.title}</h1>
                <p>{info.description}</p>
                <h5>{info.price}</h5>
                <h5>{info.category}</h5>
            </div>
            <div>
                <input type="number" name="amount" value={amount} onChange={handleChange}></input>
                <button type="button" name="plusButton" onClick={handlePlus}>+</button>
                <button type="button" name="minusButton" onClick={handleMinus}>-</button>
                <button type="button" name="confirmButton" onClick={() => handleAmt(info.id, amount)}>Add to Cart</button>
            </div>
        </div>
    )
}