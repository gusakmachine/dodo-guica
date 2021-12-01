import {cloneDeep} from "lodash";
import {strings} from "../../localisation";
import styles from "./PizzaPreview.module.css";
import FormRouter from "../FormRouter/FormRouter";
import {WindowContext} from "../../utils/contexts";
import React, {useContext, useEffect} from 'react';
import Button from "../../../../components/UI/Button/Button";

const PizzaPreview = ({schema}) => {
    const window = useContext(WindowContext);
    const {pizza, preview} = schema;
    const {title} = pizza;
    const {description, image, price} = preview;

    const show = () => {
        window.show(
            <FormRouter window={window} schema={cloneDeep(schema)} />
        );
    }

    return (
        <article className={styles.product}>
            <main className={styles.main}>
                <picture className={styles.picture} onClick={show}>
                    <img alt={title} src={image} />
                </picture>
                <h2 className={styles.name}>{title}</h2>
                <span>{description}</span>
            </main>
            <footer className={styles.footer}>
                <div className={styles.price}>
                    <span>{strings.PIZZA_FROM}&nbsp;</span>
                    <span>{price}&nbsp;</span>
                    <span>₽</span>
                </div>
                <Button data-size="medium" data-color="orange" onClick={show}>{strings.COLLECT}</Button>
            </footer>
        </article>
    );
};

export default PizzaPreview;