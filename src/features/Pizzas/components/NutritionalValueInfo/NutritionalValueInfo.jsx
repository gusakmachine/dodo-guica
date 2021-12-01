import React, {useState} from 'react';
import styles from "./NutritionalValueInfo.module.css";
import {strings} from "../../localisation";

const states = {
    visible: '',
    hidden: 'hidden',
};

const NutritionalValueInfo = ({energy_value, fats, protein, carbohydrates, weight, diameter}) => {
    const [isVisible, setIsVisible] = useState('hidden');

    const toggle = () => {
        if (isVisible === states.hidden) {
            setIsVisible(states.visible);
        } else {
            setIsVisible(states.hidden);
        }
    };

    return (
        <div className={styles.container}>
            <button type="button" onClick={toggle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                          fill="#000"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12 11a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1z" fill="#000"/>
                    <path d="M13.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#000"/>
                </svg>
            </button>
            <div className={`${styles.nutritionalValue} ${isVisible}`}>
                <i>
                    <svg viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path transform="translate(-2 0)" fillRule="evenodd"
                              d="M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z"/>
                    </svg>
                </i>
                <h2>{strings.NUTRITIONAL_VALUE}</h2>
                <section>
                    <div>{strings.ENERGY_VALUE_TITLE}</div>
                    <div>{energy_value} {strings.ENERGY_VALUE}</div>
                </section>
                <section>
                    <div>{strings.PROTEIN_TITLE}</div>
                    <div>{protein} {strings.GRAMS}</div>
                </section>
                <section>
                    <div>{strings.FATS_TITLE}</div>
                    <div>{fats} {strings.GRAMS}</div>
                </section>
                <section>
                    <div>{strings.CARBOHYDRATES_TITLE}</div>
                    <div>{carbohydrates} {strings.GRAMS}</div>
                </section>
                <div className={styles.margin}/>
                <section>
                    <div>{strings.WEIGHT_TITLE}</div>
                    <div>{weight} {strings.GRAMS}</div>
                </section>
                <section>
                    <div>{strings.DIAMETER_TITLE}</div>
                    <div>{diameter} {strings.CENTIMETERS}</div>
                </section>
            </div>
        </div>
    );
};

export default NutritionalValueInfo;