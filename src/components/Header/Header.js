import React, { useContext } from "react";
import "./header.scss";
import fav from "../../assets/icons/fav.svg";
import cart from "../../assets/icons/cart.svg";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Header = () => {
    const { cartLength } = useContext(CartContext);
    let navigate = useNavigate();

    return (
        <header className="background">
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <span onClick={() => navigate("/")}>QPICK</span>
                    </div>
                    <div className="header__icons">
                        <img src={fav} alt="Избранное" />
                        <div className="header__icons__cart">
                            {cartLength !== 0 && (
                                <div>
                                    <span>{cartLength}</span>
                                </div>
                            )}
                            <img src={cart} onClick={() => navigate("/shopping-cart")} alt="Корзина" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
