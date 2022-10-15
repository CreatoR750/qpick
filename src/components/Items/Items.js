import React, { useEffect, useState } from "react";
import "./itemsList.scss";
import Card from "../../ui/Card/Card";

const Items = ({ category, items }) => {
    const [headphones, setHeadphones] = useState([]);

    useEffect(() => {
        category === "Наушники"
            ? setHeadphones(items.filter((item) => item.type === "wire"))
            : setHeadphones(items.filter((item) => item.type === "wireless"));
    }, []);

    return (
        <div className="background">
            <div className="container">
                <div className="items">
                    <div className="items__header">{category}</div>
                    <div className="items__list">
                        {headphones.map((item) => {
                            return <Card key={item.id} item={item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;
