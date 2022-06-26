import { useContext } from "react";
import Modal from "react-modal";
import swal from "sweetalert";
import { clearCart } from "../../actions/actions";
import {
    CartDispatchContext,
    CartStateContext,
} from "../../contexts/CartProvider";

const OrderConfirmModal = ({ modalIsOpen, setIsOpen }) => {
    const carts = useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);
    const total = carts.reduce((accumulator, current) => {
        accumulator += current.quantity * current.unit_price;
        return accumulator;
    }, 0);
    let subtitle;

    function afterOpenModal() {
        subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpen(false);
    }

    function confirmRequest() {
        setIsOpen(false);
        clearCart(dispatch);
        swal({
            icon: "success",
            text: "Supply request confirmed",
            buttons: false,
            timer: 1000,
        });
    }

    const customStyles = {
        content: {
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Confirm Modal"
        >
            <h2 className="text-center text-lg">Are You Sure</h2>
            <h6 className="text-center text-xs">
                Items blow will be confirmed
            </h6>
            <div className="mt-2 px-20">
                <table className="w-full">
                    <thead className="w-full">
                        <tr className="flex justify-between text-sm">
                            <th>Items</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody className="mt-1 w-full text-xs">
                        {carts.map((cart, index) => (
                            <tr className="flex justify-between" key={index}>
                                <td>{cart.name.slice(0, 6)}</td>
                                <td>{cart.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-5 border-t-2">
                    <span className=" mr-5 mt-2 block text-center text-xs">
                        Total: {total}
                    </span>
                </div>
                <div className="mt-4 flex flex-row justify-center">
                    <button
                        className="mr-2 rounded border py-2 px-6 text-sm"
                        onClick={closeModal}
                    >
                        Cancle
                    </button>
                    <button
                        className="rounded border bg-gray-400 py-2 px-6 text-sm"
                        onClick={confirmRequest}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default OrderConfirmModal;
