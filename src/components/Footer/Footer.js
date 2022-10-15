import React from "react";
import "./footer.scss";
import lang from "../../assets/icons/lang.svg";
import vk from "../../assets/icons/vk.svg";
import telegram from "../../assets/icons/telegram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="background">
            <div className="container">
                <div className="footer">
                    <div className="footer__logo">QPICK</div>
                    <div className="footer__list">
                        <a>Избранное</a>
                        <a onClick={() => navigate("/shopping-cart")}>Корзина</a>
                        <a>Контакты</a>
                    </div>
                    <div className="footer__list">
                        <a>Условия сервиса</a>
                        <div className="footer__lang">
                            <img src={lang} alt="Язык" />
                            <span>Рус</span>
                            <span>Eng</span>
                        </div>
                    </div>
                    <div className="footer__icons">
                        <img src={vk} alt="Vk" />
                        <img src={telegram} alt="Telegram" />
                        <img src={whatsapp} alt="WhatsApp" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
