import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'; // Import React for JSX and useState if managing cart state in App

import './App.css'
import Bride from './bride'
import Cocktail from "./cocktail";
import Dolce from "./d&g";
import Groom from "./groom";
import Gucci from "./gucci";
import Lacoste from "./lacoste";
import Workattire from "./work";
import MainPage from "./mainpage";
import CreateUser from "./pages/CreateUser";
import LoginUser from "./pages/LoginUser";
import PrivateRoutes from "../utilities/PrivateRoutes";
import NotAuthorized from "./pages/NotAuthorized";
import Checkout from "./checkout";
import AddToCart from "./AddToCart";
import OrderConfirmation from "./OrderConfirmation";
//hii
function App() {

  const [cartItems, setCartItems] = useState([]); 

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]); 
  };

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route element={<PrivateRoutes />}>
      <Route path="/main" element={<MainPage />} />
      </Route>

    <Route path="/" element={<MainPage />} />

    <Route path="/bride" element={<Bride addToCart={handleAddToCart} />} />
    <Route path="/cocktail" element={<Cocktail addToCart={handleAddToCart} />} />
    <Route path="/d&g" element={<Dolce addToCart={handleAddToCart}  />} />
    <Route path="/groom" element={<Groom addToCart={handleAddToCart} />} />
    <Route path="/gucci" element={<Gucci addToCart={handleAddToCart} />} />
    <Route path="/lacoste" element={<Lacoste addToCart={handleAddToCart} />} />
    <Route path="/work" element={<Workattire addToCart={handleAddToCart} />} />
    <Route path="/main" element={<MainPage addToCart={handleAddToCart} />} />
    <Route path="/login" element={<LoginUser />} />
    <Route path="/not-authorized" element={<NotAuthorized />} />
    <Route path="/cart" element={<AddToCart cartItems={cartItems} setCartItems={setCartItems} />} />
    <Route path="/checkout" element={<Checkout />} /> {/* Route for the Checkout page */}
    <Route path="/order-confirmation" element={<OrderConfirmation />} />


    <Route path="/register" element={<CreateUser />} />











    </Routes>
    </BrowserRouter>

    </>
  )
}


export default App
