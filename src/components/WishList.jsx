import { useSelector, useDispatch } from "react-redux";
import { ADD_CART } from "../utils/cartSlice";

const WishList = () => {
  const wishlist = useSelector((store) => store.WISHLIST.wishlist);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    const itemWithQuantity = { ...item, quantity: 1 };
    dispatch(ADD_CART(itemWithQuantity));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="p-4 border border-gray-300 rounded-lg flex flex-col items-center">
              <img src={item.images[0]} alt={item.name} className="w-full h-40 object-cover mb-3" />
              <h2 className="text-lg font-semibold text-center">{item.name}</h2>
              <p className="text-gray-700">{item.title}</p>
              <p className="text-gray-700">Rating: {item.rating} ⭐</p>
              <p className="text-gray-900 font-bold text-lg">₹ {item.price}</p>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3"
                onClick={() => addToCartHandler(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600">No items in wishlist</p>
      )}
    </div>
  );
};

export default WishList;
