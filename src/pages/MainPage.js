import React from "react";
import Items from "../components/Items/Items";
import { headphones } from "../const/headphones";

const MainPage = () => {
    return (
        <>
            <Items category={"Наушники"} items={headphones} />
            <Items category={"Беспроводные наушники"} items={headphones} />
        </>
    );
};

export default MainPage;
