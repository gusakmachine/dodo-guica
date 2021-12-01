import styles from "./Error.module.css";
import React, {useRef} from "react";

const Error = ({show, text}) => {
    const popup = useRef(null);
    const popupClassName = show?
        `${styles.popup} ${styles.show}` : styles.popup;

    return (
        <div className={styles.container}>
            <div className={popupClassName} ref={popup}>
                {text}
                <svg className={styles.icon} viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path transform="translate(-2 0)" fillRule="evenodd"
                          d="M 9.52569 1.60834L 3.07216 8.64855C 1.89626 9.93135 2.80626 12 4.54647 12L 17.4535 12C 19.1937 12 20.1037 9.93135 18.9278 8.64855L 12.4743 1.60834C 11.6816 0.743602 10.3184 0.743603 9.52569 1.60834Z"/>
                </svg>
            </div>
        </div>
    );
};

export default Error;