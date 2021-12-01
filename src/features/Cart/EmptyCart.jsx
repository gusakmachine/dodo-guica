import React from 'react';
import styles from "./EmptyCart.module.css";
import CrossCloseButton from "../../components/Icons/CrossCloseButton/CrossCloseButton";
import {strings} from "./localisation";
import Button from "../../components/UI/Button/Button";

const EmptyCart = () => {
    return (
        <div className={styles.emptyCart}>
            <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" className={styles.emptyCartImage} />
            <h2 className={styles.emptyCartTitle}>{strings.CART_EMPTY_TITLE}</h2>
            <span className={styles.emptyCartDescription}>{strings.CART_EMPTY_DESCRIPTION}</span>
            <span className={styles.emptyCartDeliveryPrice}>{strings.CART_EMPTY_MIN_DELIVERY_PRICE}</span>
            <Button className={styles.emptyCartButton} type="button" data-color="orange" onClick={window.hide}>{strings.CART_EMPTY_COMEBACK_TO_MENU}</Button>
        </div>
    );
};

export default EmptyCart;