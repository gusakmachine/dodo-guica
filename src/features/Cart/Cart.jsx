import React, {useCallback} from "react";
import styles from "./Cart.module.css";
import Button from "../../components/UI/Button/Button";
import CrossCloseButton from "../../components/Icons/CrossCloseButton/CrossCloseButton";
import {map, isEmpty} from "lodash";
import Pizzas from "./Pizzas/Pizzas";
import EmptyCart from "./EmptyCart";
import {useDispatch, useSelector} from "react-redux";
import {setResources, strings} from "./localisation";
import {unset} from "../../store/reducers/cartReducer";
import useSetLanguage from "../../hooks/useSetLanguage/useSetLanguage";

const Cart = ({window}) => {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);
    const onClick = useCallback(() => {
        alert('Тут должен идти запрос к api');
        dispatch(unset());
    }, []);
    let total_price = 0;

    useSetLanguage(setResources);

    if (isEmpty(cart))
        return (
            <section className={`${styles.container}`}>
                <CrossCloseButton className={styles.closeCart} onClick={window.hide} />
                <EmptyCart/>
            </section>
        );

    const pizzas = map(cart, (item, key) => {
        total_price += item.price;
        return <Pizzas key={key} id={key} item={item}/>;
    });

    return (
        <section className={`${styles.container} ${styles.filled}`}>
            <CrossCloseButton className={styles.closeCart} onClick={window.hide} />
            <main className={styles.products}>
                <section className={styles.counter}>
                    <h1>{strings.TOTAL} {total_price}₽</h1>
                </section>
                {pizzas}
                <section className={styles.order}>
                    <Button data-color='orange' data-size='big' data-type='wide' onClick={onClick}>{strings.ORDER_ON} {total_price}₽</Button>
                </section>
            </main>
        </section>
    );
}

export default Cart;