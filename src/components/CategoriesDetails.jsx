import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_CART } from "../utils/cartSlice";
import { setWishList, removeFromWhishList } from "../utils/wishlistSlice";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const CategoriesDetails = () => {
  const products = useSelector((store) => store?.PRODUCTS?.allProducts);
  const wishlist = useSelector((store) => store?.WISHLIST?.wishlist);
  const dispatch = useDispatch();
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filterData = products?.filter((item) => item.category === category);
      setCategoryData(filterData);
    }
  }, [products, category]);

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
    <div className="grid grid-cols-3 gap-4 mt-30 px-4">
      {categoryData.length > 0 &&
        categoryData.map((item) => {
          const isInWishlist = wishlist.some((w) => w.id === item.id); // Check if item is in wishlist

          return (
            <div key={item?.id} className="relative p-4 flex flex-col items-center border border-gray-300 rounded-lg" onClick={cartHandler}>
            
              <button
                className="absolute top-2 right-2"
                data-value={JSON.stringify(item)}
                data-type="wishlist"
              >
                {isInWishlist ? <FaHeart size={22} className="text-red-500" /> : <FaRegHeart size={22} className="text-black" />}
              </button>

              <img
                src={item?.images[0]}
                alt={item?.title}
                className="w-full h-40 object-cover mb-3"
              />
              <h2 className="text-lg font-semibold text-center">{item?.title}</h2>
              <p className="text-gray-700">{item?.rating} ⭐</p>
              <p className="text-gray-900 font-bold text-lg">₹ {item?.price}</p>

              <div className="flex gap-2 mt-3">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  data-value={JSON.stringify({ ...item, quantity: 1 })}
                  data-type="cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CategoriesDetails;
