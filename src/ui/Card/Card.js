import React, { useContext } from "react";
import "./card.scss";
import star from "../../assets/icons/star.svg";
import { CartContext } from "../../context/CartContext";

const Card = ({ item }) => {
    const { updateCartLength } = useContext(CartContext);

    const clickHandler = () => {
        let localCart = sessionStorage.getItem("cart");
        localCart = JSON.parse(localCart);
        let { id } = item;
        if (localCart) {
            let exist = localCart.find((item) => item.id === id);
            if (!exist) {
                localCart.push(item);
                let stringCart = JSON.stringify(localCart);
                sessionStorage.setItem("cart", stringCart);
            }
        } else {
            let itemsArr = [];
            itemsArr.push(item);
            let stringCart = JSON.stringify(itemsArr);
            sessionStorage.setItem("cart", stringCart);
        }
        updateCartLength();
    };

    return (
        <div className="card">
            <div className="card__img">
                <img src={`img/${item.img}`} alt="Наушники" />
            </div>
            <div className="card__info">
                <div className="card__info__column">
                    <span className="card__info__name">{item.title}</span>
                    <div className="card__info__rating">
                        <img src={star} alt="Headphones" />
                        <span>{item.rate}</span>
                    </div>
                </div>
                <div className="card__info__column">
                    <span className="card__info__price">{item.price} ₽</span>
                    <button className="card__info__button" onClick={() => clickHandler()}>
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
