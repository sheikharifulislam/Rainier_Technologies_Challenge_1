import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsX } from "react-icons/bs";
const Cart = () => {
    return (
        <div className=" w-[38%] rounded bg-gray-100 pl-8">
            <h4 className="mt-4 font-sans text-sm">
                List of items that have been selected
            </h4>

            <div class="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead class="w-full bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="w-full">
                            <th scope="col" class="px-4 py-3 text-center">
                                Sl No
                            </th>
                            <th scope="col" class="px-5 py-3 text-center">
                                Item Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Qty
                            </th>
                            <th scope="col" class="px-3 py-3 text-center">
                                Price
                            </th>
                            <th scope="col" class="px-1 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <th
                                scope="row"
                                class="whitespace-nowrap px-6 py-4 text-center font-medium text-gray-900 dark:text-white"
                            >
                                1
                            </th>
                            <td class="px-6 py-4 text-center">Gray</td>
                            <td class="px-6 py-4 text-center">
                                <div className="flex items-center justify-center text-center">
                                    <span>
                                        {" "}
                                        <AiOutlinePlus
                                            size={15}
                                            className="cursor-pointer"
                                        />
                                    </span>
                                    <input
                                        type="number"
                                        className="mx-1 block h-4 w-8 rounded text-center text-gray-900 focus:outline-none"
                                    />
                                    <span>
                                        <AiOutlineMinus
                                            size={15}
                                            className="cursor-pointer"
                                        />
                                    </span>
                                </div>{" "}
                            </td>
                            <td class="px-6 py-4 text-center">$799</td>
                            <td class="px-6 py-4 text-right">
                                <BsX
                                    size={20}
                                    class="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
