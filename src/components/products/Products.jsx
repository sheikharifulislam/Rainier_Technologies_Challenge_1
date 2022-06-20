import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./single product/SingleProduct";

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios
            .get("https://fec-inventory-api.herokuapp.com/product-info")
            .then((response) => {
                setproducts(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);
    return (
        <div className="flex w-[60%] flex-wrap justify-between overflow-y-scroll pr-2">
            {products.map((product) => (
                <SingleProduct key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
