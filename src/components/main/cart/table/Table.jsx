import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import {
    changeQuantity,
    decrement,
    increment,
    remove,
} from "../../../../actions/actions";
import {
    CartDispatchContext,
    CartStateContext,
} from "../../../../contexts/CartProvider";
import loadSingleProduct from "../../../../utils/loadSingleProduct";

const Table = ({ setproducts }) => {
    const carts = useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);
    const handleRemove = async (index, id) => {
        const data = await loadSingleProduct(id);
        setproducts((previousState) => [data, ...previousState]);
        remove(dispatch, index);
    };
    return (
        <div className="relative mt-6 max-h-[350px] overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="w-full bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="w-full">
                        <th scope="col" className="px-2 py-3 text-center">
                            Sl No
                        </th>
                        <th scope="col" className="px-5 py-3 text-center">
                            Item Name
                        </th>
                        <th scope="col" className="px-3 py-3 text-center">
                            Qty
                        </th>
                        <th scope="col" className="px-3 py-3 text-center">
                            Price
                        </th>
                        <th scope="col" className="px-1 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart, index) => (
                        <tr
                            key={index}
                            className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                        >
                            <th
                                scope="row"
                                className="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900 dark:text-white"
                            >
                                {index + 1}
                            </th>
                            <td className="px-6 py-4 text-center">
                                <span className="line-clamp-1">
                                    {cart.name}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center justify-center text-center">
                                    <span
                                        onClick={() =>
                                            increment(dispatch, index)
                                        }
                                    >
                                        {" "}
                                        <AiOutlinePlus
                                            size={15}
                                            className="cursor-pointer"
                                        />
                                    </span>
                                    <input
                                        type="number"
                                        className="mx-1 block h-4 w-8 rounded text-center text-gray-900 focus:outline-none"
                                        value={cart.quantity}
                                        onChange={(e) =>
                                            changeQuantity(
                                                dispatch,
                                                index,
                                                e.target.value
                                            )
                                        }
                                    />
                                    <span
                                        onClick={() =>
                                            decrement(dispatch, index)
                                        }
                                    >
                                        <AiOutlineMinus
                                            size={15}
                                            className="cursor-pointer"
                                        />
                                    </span>
                                </div>{" "}
                            </td>
                            <td className="px-3 py-4 text-center">
                                {cart.unit_price * cart.quantity}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span
                                    onClick={() =>
                                        handleRemove(index, cart.product_id)
                                    }
                                >
                                    <BsX
                                        size={20}
                                        className="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
