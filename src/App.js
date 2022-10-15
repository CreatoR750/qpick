import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/shopping-cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
