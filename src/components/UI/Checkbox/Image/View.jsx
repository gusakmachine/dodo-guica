import styles from "./View.module.css";
import findInputClassState from "../../../../utils/UI/findInputClassState";

const View = ({image, title, description, alt, ...attrs}) => {
    const checkedClass = findInputClassState(styles, attrs);
    attrs.className = attrs.className? `hidden ${attrs.className}` : 'hidden';

    return (
        <div className={`${styles.container} ${checkedClass}`}>
            <input type="checkbox" {...attrs}/>
            <label htmlFor={attrs.id} className={styles.label}>
                <div className={styles.head}>
                    <img src={image} alt={alt? alt : title}/>
                </div>
                <div className={styles.body}>
                    <span>{title}</span>
                    <div className={styles.description}>
                        <span>{description}</span>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default View;