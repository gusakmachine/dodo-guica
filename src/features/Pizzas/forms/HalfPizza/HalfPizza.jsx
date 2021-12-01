import styles from './HalfPizza.module.css';
import Button from "../../../../components/UI/Button/Button";
import Scrollbar from "../../../../components/UI/Scrollbar/Scrollbar";
import PizzaShorts from "../../components/PizzaShorts/PizzaShorts";
import {strings} from "../../localisation";
import {useState} from "react";
import IngredientSliderRadios from "../../components/UI/IngredientSliderRadios/IngredientSliderRadios";
import insertOnChangeEntryPoint from "../../utils/forms/snapshot/insertOnChangeEntryPoint";
import {createSnapshot, initializeSnapshot} from "./snapshot/snapshot";
import HalvesViewer from "../../components/HalvesViewer/HalvesViewer";
import HalvesCards from "../../components/HalvesCards/HalvesCards";
import setToCart from "./cart/setToCart";
import {useIntermediate} from "./hooks/useIntermediate";
import {getCartButtonText} from "./utils/formatters";
import {useDispatch} from "react-redux";

const HalfPizza = ({schema, window}) => {
    const dispatch = useDispatch();
    const intermediate = useIntermediate(schema);
    const [snapshot, setSnapshot] = useState(() => initializeSnapshot(schema, intermediate));
    const {shorts, halves, cards, sizes, doughs, price} = snapshot;

    const collectOnClick = () => {
        setToCart(
            dispatch, snapshot,
            intermediate, window
        );
    };

    const onChangeEntryPoint = (name, value, event) => {
        intermediate.update(name, value);
        setSnapshot(createSnapshot(
            name, value, event,
            intermediate, snapshot
        ));
    };

    insertOnChangeEntryPoint(snapshot, onChangeEntryPoint,['shorts', 'sizes', 'doughs']);
    insertOnChangeEntryPoint(cards, onChangeEntryPoint,['left.optional', 'right.optional']);

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
                        {getCartButtonText(price)}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HalfPizza;