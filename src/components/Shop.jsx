import { useOutletContext } from "react-router";
import { Product } from "./Product";

export const Shop = () => {
    const { products, handleAmt } = useOutletContext();

    const prodList = products.map(product => {
        return <li key={product.id}><Product info={product} handleAmt={handleAmt}/></li>;
    });

    return (
        <ul>
            {prodList}
        </ul>
    )
}