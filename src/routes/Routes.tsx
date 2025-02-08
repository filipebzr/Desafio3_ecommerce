import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import Home from "../pages/Home.tsx";
import Shop from "../pages/Shop.tsx";
import Cart from "../pages/Cart.tsx";
import Contact from "../pages/Contact.tsx";
import SingleProduct from "../pages/SingleProduct.tsx";

export default function AppRoutes() {
  return (
    <Router>
      
        <Header />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<SingleProduct />} />

      </Routes>
      <Footer />
    </Router>
  );
}
