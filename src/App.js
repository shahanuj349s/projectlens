import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Home/Carousel/Carousel";
import ProductDisplay from "./components/Home/ProductDisplay/ProductDisplay";
import CompanyDescription from "./components/Home/CompanyDescription/CompanyDescription";
import ImageDisplay from "./components/Home/ImageDisplay/ImageDisplay";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/About";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";
import ContactUs from "./pages/ContactUs";
import Maps from "./components/Maps/Maps";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<Aboutus />}></Route>
          <Route path="/openvista" element={<Product1 />}></Route>
          <Route path="/BLU-Armour" element={<Product2 />}></Route>
          <Route path="/tailorcraft" element={<Product3 />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/map" element={<Maps />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
