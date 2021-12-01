import styles from "./IngredientTextCheckboxes.module.css";
import TextView from "../../../../../components/UI/Checkbox/Text/View";
import {addComa, formatText} from "../../../../../components/UI/Checkbox/Text/utils/formatRadioItem";

const IngredientTextCheckboxes = ({data={}}) => {
    if (!data) {
        return <></>;
    }

    let cards = [];
    let index = 0;
    let keysArray = Object.keys(data);

    for (let key in data) {
        let item = data[key];
        let coma = addComa(index, keysArray);

        cards.push(
            <div key={item.id} className='flex'>
                <TextView
                    id={item.id}
                    name='optional[]'
                    text={formatText(item.name, index)}
                    value={item.name}
                    readOnly={!!item.readOnly}
                    disabled={!!item.disabled}
                    checked={!!item.checked}
                    onChange={item.onChange}
                />
                {coma}
            </div>
        );

        index++;
    }

    return (
        <div className={styles.optional}>
            {cards}
        </div>
    );
};

export default IngredientTextCheckboxes;