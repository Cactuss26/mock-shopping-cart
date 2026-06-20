import { useOutletContext } from "react-router"
import { Product } from "./Product";

export const Cart = () => {
    const { products, handlePlus, handleMinus } = useOutletContext();

    const selectedProducts = products.filter(product => product.inCart === true);

    const selProdList = selectedProducts.map(product => {
        return <li><Product key={product.id} info={product} handlePlus={handlePlus} handleMinus={handleMinus}/></li>;
    })

    return (
        <ul>
            {selProdList}
        </ul>
    )
}