import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../utils/cartSlice";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((store) => store.CART.cart);
    const error = useSelector((store) => store.CART.error);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const clearCartHandler = () => {
        dispatch(CLEAR_CART());
    };

    const quantityHandler = (event, id) => {
        let target = event.target;
        if (target.tagName === "BUTTON") {
            let targetValue = target.getAttribute("data-value");
            if (targetValue === "decrease") {
                dispatch(DECREASE_QUANTITY({ id }));
            } else if (targetValue === "increase") {
                dispatch(INCREASE_QUANTITY({ id }));
            }
        }
    };

    const totalValue = useMemo(() => cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0), [cart]);

    return (
        <div className="mt-20 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

            {error && <p className="text-red-500 text-center">{error}</p>}

            {cart.length > 0 ? (
                <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="grid grid-cols-5 font-semibold text-gray-700 border-b pb-2">
                        <span className="col-span-2">Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span>
                    </div>

                    {cart.map((item) => (
                        <div key={item?.id} className="grid grid-cols-5 items-center border-b py-4">
                            <div className="col-span-2 flex items-center gap-4">
                                <img src={item?.images[0]} alt={item?.title} className="w-16 h-16 object-cover rounded-md" />
                                <p className="font-medium">{item?.title}</p>
                            </div>

                            <p className="text-gray-900 font-semibold">₹ {item?.price.toFixed(2)}</p>

                            <div className="flex items-center gap-3" onClick={(event) => quantityHandler(event, item?.id)}>
                                <button className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50" data-value="decrease" disabled={item.quantity === 1}>
                                    -
                                </button>
                                <span className="text-lg font-semibold">{item.quantity}</span>
                                <button className="px-3 py-1 bg-gray-300 rounded" data-value="increase">
                                    +
                                </button>
                            </div>

                            <p className="text-gray-900 font-semibold">₹ {(item?.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}

                    <div className="grid grid-cols-5 font-semibold text-gray-900 border-t pt-4">
                        <span className="col-span-3"></span>
                        <span className="text-right">Total:</span>
                        <span className="text-lg font-bold">₹ {totalValue.toFixed(2)}</span>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button className="px-6 py-3 bg-red-500 text-white rounded-md" onClick={clearCartHandler}>
                            Clear Cart
                        </button>

                        <button className="px-6 py-3 bg-green-500 text-white rounded-md" onClick={() => navigate("/checkout")}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-600 text-center mt-10">
                    Your cart is empty. <br />
                    <Link to="/" className="text-blue-500 underline">Go shopping!</Link>
                </p>
            )}
        </div>
    );
};

export default Cart;






