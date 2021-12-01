import styles from "./Slider.module.css";
import SliderDisplay from "../../Slider/Slider";

const Slider = ({children, offset}) => {
    const sliderDisplay = offset === null? '' : <SliderDisplay offset={offset} />;

    return (
        <div className={styles.container}>
            {sliderDisplay}
            {children}
        </div>
    );
};

export default Slider;