import { useContext } from "react";
import { addToCart } from "../../../../actions/actions";
import { CartDispatchContext } from "../../../../contexts/CartProvider";

const SingleProduct = ({ product }) => {
    const dispatch = useContext(CartDispatchContext);
    const handleCart = (e, item) => {
        addToCart(dispatch, { id: item.id, name: item.name });
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
    };
    return (
        <div className="mb-2 flex w-[48%] flex-wrap items-center justify-between rounded bg-gray-100 p-4">
            <div className="h-[100px] w-[100px]">
                <img
                    src="https://dummyimage.com/150x150"
                    className="h-full w-full"
                    alt=""
                />
            </div>
            <div className="ml-2 flex-1">
                <h2 className="text-md mb-2 font-serif line-clamp-1">
                    {product.name}
                </h2>
                <div className="flex items-start justify-between">
                    <p className="text-xs">
                        {product.description.slice(0, 50)}
                    </p>
                    <div className="ml-1">
                        <button
                            className="block w-[70px] rounded bg-gray-300 py-1 text-xs"
                            onClick={(e) => handleCart(e, product)}
                        >
                            Add to list
                        </button>
                        <button className="mt-1 block w-[70px] rounded bg-gray-300 py-1  text-xs">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
