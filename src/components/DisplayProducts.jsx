import { useDispatch, useSelector } from "react-redux";
import { ADD_CART } from "../utils/cartSlice";
import { setWishList, removeFromWhishList } from "../utils/wishlistSlice";
import { FaRegHeart, FaHeart } from "react-icons/fa"; 

const DisplayProducts = () => {
  const products = useSelector((store) => store.PRODUCTS.filteredProducts);
  console.log("Filtered Products:", products);
  const wishlist = useSelector((store) => store.WISHLIST.wishlist);
  const dispatch = useDispatch();

  const cartHandler = (event) => {
    let target = event.target.closest("button");
    if (target) {
      const itemData = JSON.parse(target.getAttribute("data-value"));
      if (target.getAttribute("data-type") === "cart") {
        const itemWithQuantity = { ...itemData, quantity: 1 };
        dispatch(ADD_CART(itemWithQuantity));
      } else if (target.getAttribute("data-type") === "wishlist") {
        const isInWishlist = wishlist.some((w) => w.id === itemData.id);
        if (isInWishlist) {
          dispatch(removeFromWhishList(itemData)); 
        } else {
          dispatch(setWishList(itemData)); 
        }
      }
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product) => {
          const isInWishlist = wishlist.some((w) => w.id === product.id); // Check if item is in wishlist

          return (
            <div
              key={product.id}
              className="relative p-4 flex flex-col items-center border border-gray-300 rounded-lg"
              onClick={cartHandler}
            >
            
              <button
                className="absolute top-2 right-2"
                data-value={JSON.stringify(product)}
                data-type="wishlist"
              >
                {isInWishlist ? <FaHeart size={22} className="text-red-500" /> : <FaRegHeart size={22} className="text-black" />}
              </button>

              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-40 object-cover mb-3"
              />
              <h2 className="text-lg font-semibold text-center">{product.name}</h2>
              <p className="text-gray-700">{product.title}</p>
              <p className="text-gray-700">Rating: {product.rating} ⭐</p>
              <p className="text-gray-900 font-bold text-lg">₹ {product.price}</p>

              <div className="flex gap-2 mt-3">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  data-value={JSON.stringify(product)}
                  data-type="cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center col-span-3 text-lg text-gray-600">
          No products found
        </p>
      )}
    </div>
  );
};

export default DisplayProducts;





