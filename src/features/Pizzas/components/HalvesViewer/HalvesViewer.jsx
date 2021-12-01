import styles from './HalvesViewer.module.css';
import {strings} from "../../localisation";

const HalvesViewer = ({left, right}) => {
    const title = strings.HALF_PIZZA_CONSTRUCTOR;
    const alt = strings.HALF_PIZZA_CONSTRUCTOR;

    const createLeftSide = () => {
        if (!left)
            return;

        return (
            <div className={styles.half}>
                <picture>
                    <img className={styles.pizzaImage} alt={alt} title={title} src={left.image}/>
                </picture>
            </div>
        );
    };

    const createRightSide = () => {
        if (!right)
            return;

        return (
            <div className={`${styles.half} ${styles.right}`}>
                <picture>
                    <img className={styles.pizzaImage} alt={alt} title={title} src={right.image}/>
                </picture>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.constructor}>
                <img className={styles.preview} src="https://dodopizza-a.akamaihd.net/site-static/dist/c6707f17b454b0af1283.svg" alt={alt}/>
                {createLeftSide()}
                {createRightSide()}
            </div>
        </div>
    );
};

export default HalvesViewer;