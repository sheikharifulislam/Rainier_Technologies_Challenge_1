import Cart from "./components/cart/Cart";
import DashboardHeader from "./components/dashboard header/DashboardHeader";
import Products from "./components/products/Products";

function App() {
    return (
        <section className="container my-3 px-4">
            <DashboardHeader />
            <div className="mt-6 flex justify-between">
                <Products />
                <Cart />
            </div>
        </section>
    );
}

export default App;
