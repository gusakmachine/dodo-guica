import styles from './HalfPizza.module.css';
import Button from "../../../../components/UI/Button/Button";
import Scrollbar from "../../../../components/UI/Scrollbar/Scrollbar";
import PizzaShorts from "../../components/PizzaShorts/PizzaShorts";
import {strings} from "../../localisation";
import {useCallback, useEffect, useRef, useState} from "react";
import IngredientSliderRadios from "../../components/UI/IngredientSliderRadios/IngredientSliderRadios";
import insertOnChangeEntryPoint from "../../utils/forms/snapshot/insertOnChangeEntryPoint";
import {createSnapshot, initializeSnapshot} from "./snapshot/snapshot";
import HalvesViewer from "../../components/HalvesViewer/HalvesViewer";
import HalvesCards from "../../components/HalvesCards/HalvesCards";
import setToCart from "./cart/setToCart";
import {useIntermediate} from "./hooks/useIntermediate";
import {getCartButtonText} from "./utils/formatters";
import {useDispatch} from "react-redux";
import Error from "../../components/Error/Error";

const HalfPizza = ({schema, window}) => {
    const dispatch = useDispatch();
    const intermediate = useIntermediate(schema);
    const [snapshot, setSnapshot] = useState(() => initializeSnapshot(schema, intermediate));
    const {shorts, halves, cards, sizes, doughs, price} = snapshot;
    const [error, setError] = useState({
        text: null,
        show: false,
    });

    const collectOnClick = () => {
        const {left, right} = intermediate.halves.schemas;

        if (!left) {
            setError({
                text: strings.CHOOSE_THE_LEFT_SIDE_ERROR,
                show: true,
            });
        } else if (!right) {
            setError({
                text: strings.CHOOSE_THE_RIGHT_SIDE_ERROR,
                show: true,
            });
        } else {
            setToCart(
                dispatch, snapshot,
                intermediate, window
            );
        }
    };

    const onChangeEntryPoint = useCallback((name, value, event) => {
        intermediate.update(name, value);
        setSnapshot(createSnapshot(
            name, value, event,
            intermediate, snapshot
        ));
    }, [snapshot]);

    insertOnChangeEntryPoint(snapshot, onChangeEntryPoint,['shorts', 'sizes', 'doughs']);
    insertOnChangeEntryPoint(cards, onChangeEntryPoint,['left.optional', 'right.optional']);

    useEffect(() => {
        if (error.show) {
            setTimeout(() => {
                setError({
                    text: error.text,
                    show: false,
                });
            }, 1000);
        }
    });

    return (
        <div className={styles.container}>
            <div className={styles.pizzaSelection}>
                <Scrollbar scrollableClassName={styles.pizzasList}>
                    <h2 className={styles.title}>{strings.HALF_PIZZA_DESCRIPTION}</h2>
                    <PizzaShorts shorts={shorts} sources={intermediate.pizzas} />
                </Scrollbar>
            </div>
            <div className={styles.constructor}>
                <div>
                    <HalvesViewer {...halves} />
                    <HalvesCards {...cards} />
                </div>
                <div className={styles.bottom}>
                    <IngredientSliderRadios data={sizes} name={'sizes'}/>
                    <IngredientSliderRadios data={doughs} name={'doughs'}/>
                    <Button data-color='orange' data-size='big' data-type='wide' onClick={collectOnClick}>
                        <Error {...error} />
                        {getCartButtonText(price)}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HalfPizza;