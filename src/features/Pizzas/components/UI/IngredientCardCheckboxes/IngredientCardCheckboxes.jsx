import styles from "./IngredientCardCheckboxes.module.css";
import CardView from "../../../../../components/UI/Checkbox/Card/View";
import {strings} from "../../../localisation";

const IngredientCardCheckboxes = ({data}) => {
    if (!data) {
        return <></>;
    }

    let cards = [];

    for (let key in data) {
        let item = data[key];

        cards.push(
            <CardView
                key={item.id}
                id={item.id}
                name='additional[]'
                title={item.name}
                description={item.price + strings.CURRENCY}
                image={item.image}
                value={item.price}
                readOnly={!!item.readOnly}
                disabled={!!item.disabled}
                checked={!!item.checked}
                onChange={item.onChange}
            />
        );
    }

    return (
        <div className={styles.additional}>
            <span className={styles.additionalTitle}>{strings.ADDITIONAL_ADD_TO_PIZZA}</span>
            <section className={styles.additionalChoices}>
                {cards}
            </section>
        </div>
    );
};

export default IngredientCardCheckboxes;