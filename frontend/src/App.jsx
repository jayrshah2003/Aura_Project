import { BrowserRouter, Route, Routes } from "react-router-dom";



import './App.css'
import Bride from './bride'
import Cocktail from "./cocktail";
import Dolce from "./d&g";
import Groom from "./groom";
import Gucci from "./gucci";
import Lacoste from "./lacoste";
import Workattire from "./work";
<<<<<<< Updated upstream

import Login from "./Login";
=======
import MainPage from "./mainpage";
import CreateUser from "./pages/CreateUser";
import LoginUser from "./pages/LoginUser";
import PrivateRoutes from "../utilities/PrivateRoutes";
import NotAuthorized from "./pages/NotAuthorized";
import Checkout from "./checkout";
import AddToCart from "./AddToCart";
import OrderConfirmation from "./OrderConfirmation";
import ContactUs from "./ContactUs";
>>>>>>> Stashed changes
//hii
function App() {
  return (
    <>
<<<<<<< Updated upstream
      <BrowserRouter>
        <Routes>
          <Route path="/bride" element={<Bride />} />
          <Route path="/cocktail" element={<Cocktail />} />
          <Route path="/d&g" element={<Dolce />} />
          <Route path="/groom" element={<Groom />} />
          <Route path="/gucci" element={<Gucci />} />
          <Route path="/lacoste" element={<Lacoste />} />
          <Route path="/work" element={<Workattire />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
=======
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
    <Route path="/contactus" element={<ContactUs />} />


    <Route path="/register" element={<CreateUser />} />











    </Routes>
    </BrowserRouter>

>>>>>>> Stashed changes
    </>
  );
}

export default App;
