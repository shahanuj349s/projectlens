import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Home/Carousel/Carousel";
import ProductDisplay from "./components/Home/ProductDisplay/ProductDisplay";
import CompanyDescription from "./components/Home/CompanyDescription/CompanyDescription";
import ImageDisplay from "./components/Home/ImageDisplay/ImageDisplay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/About";
import Product1 from "./components/Product1/Product1";
import Product2 from "./components/Product2/Product2";
import Contact from "./components/ContactUs/Contact/Contact";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/product" element={<Product1 />}></Route>
          <Route path="/product1" element={<Product2 />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
