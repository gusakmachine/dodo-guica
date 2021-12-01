import styles from "./Texts.module.css";
import Text from "./Text";
import {addComa, formatText} from "./utils/formatRadioItem";

const Texts = ({data, name}) => {
    const radios = data.map((item, index, array) => {
        let coma = addComa(index, array);

        item.text = formatText(item.text, index);

        return (
            <div key={index} className="flex">
                <Text {...item} name={name}/>
                {coma}
            </div>
        );
    });

    return (
        <div className={styles.container}>
            {radios}
        </div>
    );
};

export default Texts;