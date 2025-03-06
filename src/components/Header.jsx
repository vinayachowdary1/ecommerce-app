import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { applyFilters } from "../utils/productSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.CART.cart);
  const wishlist = useSelector((store) => store.WISHLIST.wishlist);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    dispatch(
      applyFilters({
        category: [],
        rating: [],
        price: "",
        search: query,
      })
    );
  };

  return (
    <>
      <nav className="bg-black h-[5rem] fixed left-0 right-0 top-0 flex items-center justify-around w-full px-4 z-50">
        <Link to="/" className="text-white text-3xl tracking-widest">
          ShopCart
        </Link>

        <input
          className="border border-white rounded-md text-white w-1/4 text-2xl px-4 bg-transparent placeholder-white"
          type="text"
          placeholder="Enter the products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <Link to="/" className="text-white text-2xl">
          Home
        </Link>
        <Link to="/categories" className="text-white text-2xl">
          Categories
        </Link>

       
        <Link
          to="/wishlist"
          className="text-white text-2xl flex items-center gap-2 relative"
        >
          <AiOutlineHeart className="text-3xl text-white" />

          {wishlist.length > 0 && (
            <span className="bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center absolute top-[-5px] right-[-10px]">
              {wishlist.length}
            </span>
          )}
          Wishlist
        </Link>

       
        <Link
          to="/cart"
          className="text-white text-2xl flex items-center gap-2 relative"
        >
          <AiOutlineShoppingCart className="text-3xl text-white" />

          {cart.length > 0 && (
            <span className="bg-green-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center absolute top-[-5px] right-[-10px]">
              {cart.length}
            </span>
          )}
          Cart
        </Link>
      </nav>

      <div className="pt-[5rem]"></div>
    </>
  );
};

export default Header;




