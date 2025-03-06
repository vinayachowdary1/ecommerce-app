import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    return (
        <div className="mt-20 px-4 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 text-green-600">🎉 Order Placed Successfully!</h1>
            <p className="text-lg text-gray-700 mb-6">
                Thank you for shopping with us. Your order has been placed successfully.
            </p>
            <button 
                className="px-6 py-3 bg-blue-500 text-white rounded-md"
                onClick={() => navigate("/")}
            >
                Back to Home
            </button>
        </div>
    );
};

export default Checkout;
