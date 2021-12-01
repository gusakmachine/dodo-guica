import {isEmpty} from "lodash";
import styles from "./HalvesCards.module.css";
import IngredientTextCheckboxes from "../UI/IngredientTextCheckboxes/IngredientTextCheckboxes";
import NutritionalValueInfo from "../NutritionalValueInfo/NutritionalValueInfo";

const HalvesCards = ({left, right}) => {
    if (!left || !right)
        return <></>;

    const leftNVI = isEmpty(left.info)?  '' : <NutritionalValueInfo {...left.info} />;
    const rightNVI = isEmpty(right.info)? '' : <NutritionalValueInfo {...left.info} />;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={left.image} alt={left.title}/>
                    {left.blur? <div className={styles.rightSide} /> : ''}
                </div>
                <div className={styles.description}>
                    <div className={styles.pizzaHeader}>
                        <span className={styles.pizzaTitle}>{left.title}</span>
                        {leftNVI}
                    </div>
                    <div className={styles.pizzaOptional}>
                        <IngredientTextCheckboxes data={left.optional} />
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    {right.blur? <div className={styles.leftSide} /> : ''}
                    <img src={right.image} alt={right.title}/>
                </div>
                <div className={styles.description}>
                    <div className={styles.pizzaHeader}>
                        <span className={styles.pizzaTitle}>{right.title}</span>
                        {rightNVI}
                    </div>
                    <div className={styles.pizzaOptional}>
                        <IngredientTextCheckboxes data={right.optional} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HalvesCards;