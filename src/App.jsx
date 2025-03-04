import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AppStore from './utils/AppStore'
import { Provider } from 'react-redux'
import Header from "./components/Header"
import Home from "./components/Home"
import Categories from "./components/Categories"
function App() {
return(
  <Provider store = {AppStore}>
  <BrowserRouter>
  <Header/>
  <Routes>
 <Route path="/" element={<Home/>}></Route>
 <Route path="/categories" element={<Categories/>}></Route>
  </Routes>
  </BrowserRouter>
 </Provider>
)
}

export default App
