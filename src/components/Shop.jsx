import { useOutletContext } from "react-router";
import { Product } from "./Product";

export const Shop = () => {
    const { products, handlePlus, handleMinus } = useOutletContext();

    const prodList = products.map(product => {
        return <li><Product key={product.id} info={product} handlePlus={handlePlus} handleMinus={handleMinus}/></li>;
    });

    return (
        <ul>
            {prodList}
        </ul>
    )
}