import styles from "./View.module.css";
import findInputClassState from "../../../../utils/UI/findInputClassState";

const View = ({image, title, description, ...attrs}) => {
    const checkedClass = findInputClassState(styles, attrs);
    attrs.className = attrs.className? `hidden ${attrs.className}` : 'hidden';

    return (
        <div className={`${styles.container} ${checkedClass}`}>
            <input type="checkbox" {...attrs} />
            <label htmlFor={attrs.id} className={styles.label}>
                <svg className={styles.checkedIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#000"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.602 7.864a1 1 0 01.2 1.4l-4.576 6.101c-.061.082-.146.197-.23.29a1.346 1.346 0 01-.513.366c-.311.121-.656.121-.967 0a1.346 1.346 0 01-.513-.365c-.084-.094-.17-.209-.23-.29l-2.075-2.767a1 1 0 011.6-1.2l1.701 2.269 4.202-5.604a1 1 0 011.4-.2z" fill="#000" />
                </svg>
                <img className={styles.img} src={image} alt={title} />
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{description}</span>
            </label>
        </div>
    );
};

export default View;