import SingleProduct from "./single product/SingleProduct";

const Products = ({ products }) => {
    return (
        <div className="custom-scroll-bar flex h-[490px] w-[60%] flex-wrap justify-between overflow-y-auto pr-2">
            {products.map((product, index) => (
                <SingleProduct key={index} product={product} />
            ))}
        </div>
    );
};

export default Products;
