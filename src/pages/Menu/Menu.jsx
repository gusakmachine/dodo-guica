import React from "react";
import styles from "./Menu.module.css";
import Header from "../../features/Header/Header";
import Pizzas from "../../features/Pizzas/Pizzas";
import Window from "../../components/Window/Window";
import {CartContext} from "./contexts";

const Menu = () => {
    const wnd = {};
    const card = {};

    return (
        <CartContext.Provider value={card}>
            <Window window={wnd} />
            <main className={styles.main}>
                <Header window={wnd}/>
                <Pizzas window={wnd}/>
            </main>
        </CartContext.Provider>
    );
}

export default Menu;