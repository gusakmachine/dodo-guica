import styles from "./PizzaViewer.module.css";
import {useRef} from "react";

export const VIEWER_SIZES = {
    small: '',
    middle: styles.middleSize,
    big: styles.bigSize,
};

export default function PizzaViewer({title, src, size}) {
    const img = useRef(null);
    let oldSrc = src;

    const onTransitionEnd = () => {
        img.current.src = src;
    };

    return (
        <div className={`${size} ${styles.container}`}>
            <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse opacity="0.6" cx="225" cy="225" rx="224" ry="224" stroke="#6F6E6F" strokeWidth="0.8"
                         strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 12.2"
                />
            </svg>
            <svg width="382" height="382" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="191" cy="191" r="190" stroke="#6F6E6F" strokeWidth="0.6" strokeLinecap="round"
                        strokeLinejoin="round" strokeDasharray="1 6.1"
                />
            </svg>
            <img ref={img} className={styles.image} src={oldSrc} alt={title} onTransitionEnd={onTransitionEnd}/>
        </div>
    );
};