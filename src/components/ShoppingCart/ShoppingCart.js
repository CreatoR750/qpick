import React, { useEffect, useState } from "react";
import BasketCard from "../../ui/BasketCard/BasketCard";
import "./shoppingCart.scss";

const ShoppingCart = () => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        let localCart = sessionStorage.getItem("cart");
        localCart = JSON.parse(localCart);
        let cart = localCart.map((item) => {
            return { ...item, count: 1 };
        });
        setItems(cart);
    }, []);

    useEffect(() => {
        let counter = items.reduce((sum, item) => sum + item.price * item.count, 0);
        setTotalPrice(counter);
    }, [items]);

    const deleteItem = (id) => {
        let filter = items.filter((item) => item.id !== id);
        let stringCart = JSON.stringify(filter);
        sessionStorage.setItem("cart", stringCart);
        setItems(filter);
    };

    const valuesHandler = (values) => {
        let itemsCopy = [...items];
        let index = itemsCopy.findIndex((el) => el.id === values.id);
        itemsCopy[index] = { ...itemsCopy[index], count: values.count };
        setItems(itemsCopy);
    };

    return (
        <div className="background">
            <div className="container">
                <div className="cart">
                    <div className="cart__header">Корзина</div>
                    <div className="cart__wrapper">
                        <div className="cart__items">
                            {items.length ? (
                                items.map((item) => {
                                    return (
                                        <BasketCard
                                            key={item.id}
                                            item={item}
                                            onDelete={(id) => deleteItem(id)}
                                            onValueChange={(values) => valuesHandler(values)}
                                        />
                                    );
                                })
                            ) : (
                                <span>Корзина пуста</span>
                            )}
                        </div>
                        <div className="cart__payment">
                            <div className="cart__payment__info">
                                <span>ИТОГО</span>
                                <span>₽ {totalPrice}</span>
                            </div>
                            <button>Перейти к оформлению</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
