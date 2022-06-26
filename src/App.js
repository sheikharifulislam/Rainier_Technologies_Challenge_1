import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./components/main/cart//Cart";
import DashboardHeader from "./components/main/dashboard header/DashboardHeader";
import Products from "./components/main/products/Products";
import CartProvider from "./contexts/CartProvider";

function App() {
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
        <CartProvider>
            <section className="container flex h-screen flex-col justify-between overflow-hidden px-4">
                <DashboardHeader />
                <div className="flex h-full flex-1 justify-between ">
                    <Products products={products} />
                    <Cart setproducts={setproducts} />
                </div>
            </section>
        </CartProvider>
    );
}

export default App;
