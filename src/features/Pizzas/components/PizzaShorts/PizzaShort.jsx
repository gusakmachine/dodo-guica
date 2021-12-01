import styles from "./PizzaShort.module.css";
import CheckboxImageView from "../../../../components/UI/Checkbox/Image/View";
import {strings} from "../../localisation";

const PizzaShort = ({side, image, title, description, price, ...attrs}) => {
    const blurClassName = `${styles.blur} ${styles[side]}`;
    const blur = attrs.checked? <div className={blurClassName} onClick={attrs.onChange} /> : '';

    return (
        <div className={styles.container}>
            {blur}
            <CheckboxImageView
                image={image}
                title={title}
                description={`${price} ${strings.CURRENCY}`}
                alt={title}
                {...attrs}
            />
        </div>
    )
};

export default PizzaShort;