import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Bride from './bride'
import MainPage from './mainpage'
import Cocktail from "./cocktail";
import Dolce from "./d&g";
import Groom from "./groom";
import Gucci from "./gucci";
import Lacoste from "./lacoste";
import Workattire from "./work";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/MainPage" element={<MainPage />} />
    <Route path="/bride" element={<Bride />} />
    <Route path="/cocktail" element={<Cocktail />} />
    <Route path="/d&g" element={<Dolce />} />
    <Route path="/groom" element={<Groom />} />
    <Route path="/gucci" element={<Gucci />} />
    <Route path="/lacoste" element={<Lacoste />} />
    <Route path="/work" element={<Workattire />} />





    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
