import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import CategoriesDetails from './components/CategoriesDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import WishList from './components/WishList';
function App() {
  console.log("Rendering App Component...");

  return (
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categoriesdetails/:category" element={<CategoriesDetails/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<WishList/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

