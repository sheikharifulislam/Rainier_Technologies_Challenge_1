import SingleProduct from "./single product/SingleProduct";

const Products = ({ products }) => {
    return (
        <div className="custom-scroll-bar flex h-full w-[60%] flex-wrap justify-between overflow-y-scroll pr-2">
            {products.map((product) => (
                <SingleProduct key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
