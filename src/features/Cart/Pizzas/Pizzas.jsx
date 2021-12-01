import React from 'react';
import styles from "./Pizzas.module.css";
import {useDispatch} from "react-redux";
import {unset} from "../../../store/reducers/cartReducer";

const Pizzas = ({id, item}) => {
    const dispatch = useDispatch();
    const {title, description, src, price} = item;

    const onClick = () => {
        dispatch(unset({id: id}));
    }

    return (
        <section className={styles.container}>
            <article className={styles.article}>
                <button className={styles.close} onClick={onClick}>
                    <svg fill="none" viewBox="0 0 24 24">
                        <path
                            d="M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z"
                            fill="#000"/>
                    </svg>
                </button>
                <div className={styles.body}>
                    <img className={styles.image} src={src} alt={title}/>
                    <div className={styles.info}>
                        <h3 className={styles.title}>{title}</h3>
                        <section className={styles.description}>
                            <div className={styles.param}>{description}</div>
                        </section>
                    </div>
                </div>
                <div className={styles.counter}>{price}₽</div>
            </article>
        </section>
    );
};

export default Pizzas;