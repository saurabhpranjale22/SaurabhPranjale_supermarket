import { Routes } from "react-router-dom";

import { Route } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from "./Pages/Cart";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <div>
        <div className="bg-black">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
  </div>
    </>
  );
}

export default App;
