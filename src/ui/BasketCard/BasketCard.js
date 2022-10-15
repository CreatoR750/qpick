import React, { useEffect, useState, useContext } from "react";
import "./basketCard.scss";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import del from "../../assets/icons/delete.svg";
import { CartContext } from "../../context/CartContext";

const BasketCard = ({ item, onDelete, onValueChange }) => {
    const [count, setCount] = useState(1);
    const { updateCartLength } = useContext(CartContext);

    useEffect(() => {
        let { id } = item;
        onValueChange({ id: id, count: count });
    }, [count]);

    const decreaseCount = () => {
        if (count === 1) {
            let { id } = item;
            onDelete(id);
            updateCartLength();
        } else {
            setCount((count) => count - 1);
        }
    };

    const deleteHandler = () => {
        let { id } = item;
        onDelete(id);
        updateCartLength();
    };

    return (
        <div className="basket-card">
            <div className="basket-card__left">
                <div className="basket-card__left__wrapper">
                    <img className="basket-card__left__image" src={`img/${item.img}`} alt="Картинка" />
                    <div className="basket-card__left__buttons">
                        <img src={minus} alt="Убавить" onClick={() => decreaseCount()} />
                        <span>{count}</span>
                        <img src={plus} alt="Прибавить" onClick={() => setCount((count) => count + 1)} />
                    </div>
                </div>
                <div className="basket-card__left__info">
                    <div className="basket-card__left__info__wrapper">
                        <span className="basket-card__left__info__title">{item.title}</span>
                        <span className="basket-card__left__info__price">{item.price} ₽</span>
                    </div>
                </div>
            </div>
            <div className="basket-card__right">
                <img
                    src={del}
                    alt="Удалить"
                    onClick={() => {
                        deleteHandler();
                    }}
                />
                <span>{item.price} ₽</span>
            </div>
        </div>
    );
};

export default BasketCard;
