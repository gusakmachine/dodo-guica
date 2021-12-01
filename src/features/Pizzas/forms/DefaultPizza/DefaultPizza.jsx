import merge from "deepmerge";
import {useState} from "react";
import {useDispatch} from "react-redux";
import setToCart from "./cart/setToCart";
import {strings} from "../../localisation";
import styles from "./DefaultPizza.module.css";
import PizzaViewer from "../../components/PizzaViewer/PizzaViewer";
import Button from "../../../../components/UI/Button/Button";
import Scrollbar from "../../../../components/UI/Scrollbar/Scrollbar";
import NutritionalValueInfo from "../../components/NutritionalValueInfo/NutritionalValueInfo";
import createUpdatedFieldBranch from "../../utils/forms/snapshot/createUpdatedFieldBranch";
import IngredientTextCheckboxes from "../../components/UI/IngredientTextCheckboxes/IngredientTextCheckboxes";
import IngredientSliderRadios from "../../components/UI/IngredientSliderRadios/IngredientSliderRadios";
import IngredientCardCheckboxes from "../../components/UI/IngredientCardCheckboxes/IngredientCardCheckboxes";
import insertOnChangeEntryPoint from "../../utils/forms/snapshot/insertOnChangeEntryPoint";
import {createSnapshot, initializeSnapshot} from "./snapshot/snapshot";

const DefaultPizza = ({schema, window}) => {
    const dispatch = useDispatch();
    const [snapshot, setSnapshot] = useState(() => initializeSnapshot(schema));
    const {viewer, header, info, optional, sizes, doughs, additional, price} = snapshot;
    const {title, dough, weight, diameter} = header;
    const onClick = () => {
        setToCart(dispatch, snapshot, schema._id, window)
    };
    const onChangeEntryPoint = (name, value, event) => {
        setSnapshot(createSnapshot(schema,
            merge(snapshot, createUpdatedFieldBranch(snapshot, name, value, event)))
        );
    };

    insertOnChangeEntryPoint(snapshot, onChangeEntryPoint, ['optional', 'sizes', 'doughs', 'additional']);

    return (
        <div className={styles.container}>
            <PizzaViewer {...viewer} />
            <div className={styles.rightSection}>
                <Scrollbar className={styles.scrollable}>
                    <div className={styles.header}>
                        <div className={styles.title}>
                            <span>{title}</span>
                            <NutritionalValueInfo {...info} />
                        </div>
                        <span className={styles.description} >{diameter} {strings.CENTIMETERS}, {dough}, {weight} {strings.GRAMS}</span>
                    </div>
                    <div className={styles.body}>
                        <IngredientTextCheckboxes data={optional} name={'optional[]'} />
                        <IngredientSliderRadios data={sizes} name={'sizes'} />
                        <IngredientSliderRadios data={doughs} name={'doughs'} />
                        <IngredientCardCheckboxes data={additional} name={'additional[]'} />
                    </div>
                </Scrollbar>
                <div className={styles.submit}>
                    <Button data-color='orange' data-size='big' data-type='wide' onClick={onClick}>{strings.ADD_TO_CART} {strings.FOR} {price} {strings.CURRENCY}</Button>
                </div>
            </div>
        </div>
    );
};

export default DefaultPizza;