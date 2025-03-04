import { Link } from "react-router-dom";
const Header = ()=>{
return(
    <nav className="bg-black h-[5rem] fixed left-0 right-0 top-0 flex items-center justify-around w-full">
       <Link to="/" className="text-white text-3xl tracking-widest">ShopCart</Link>
       <input 
  className="border border-white rounded-md text-white basis-[25%] text-2xl px-4 bg-transparent placeholder-white" 
  type="text" 
  placeholder="Enter the products..." 
/>
        <Link to="/" className="text-white text-2xl">Home</Link>
        <Link to="/categories" className="text-white text-2xl">Categories</Link>
        <Link to="/contact" className="text-white text-2xl">Contact</Link>
        <Link to="/cart" className="text-white text-2xl">Cart</Link>
    </nav>
)
}
export default Header;