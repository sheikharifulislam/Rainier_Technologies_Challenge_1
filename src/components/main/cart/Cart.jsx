import { useContext, useState } from "react";
import swal from "sweetalert";
import { CartStateContext } from "../../../contexts/CartProvider";
import OrderConfirmModal from "../../custom/OrderConfirmModal";
import Table from "./table/Table";

const Cart = ({ setproducts }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const carts = useContext(CartStateContext);

    const handleConfirm = () => {
        if (carts.length >= 1) {
            setIsOpen(true);
        } else {
            swal({
                icon: "warning",
                text: "Pleae add items fast",
            });
        }
    };

    const total = carts.reduce((accumulator, current) => {
        accumulator += current.quantity * current.unit_price;
        return accumulator;
    }, 0);

    return (
        <div className=" relative h-[490px] w-[38%] rounded bg-gray-100 pl-8">
            <h4 className="mt-4 font-sans text-sm">
                List of items that have been selected
            </h4>

            <Table setproducts={setproducts} />
            <div className="mt-4 border-t-2">
                <span className=" mr-5 block text-right text-xs">
                    Total: {total}
                </span>
            </div>
            <div>
                <button
                    className="ronded absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-300 py-2 px-5 text-xs text-black"
                    onClick={handleConfirm}
                >
                    Confirm
                </button>
            </div>
            {/* cell order confirm modal */}
            <OrderConfirmModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
};

export default Cart;
