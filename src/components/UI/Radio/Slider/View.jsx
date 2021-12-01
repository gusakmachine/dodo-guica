import styles from "./View.module.css";

const View = ({text, ...attrs}) => {
    let containerClassName = styles.container;
    attrs.className = attrs.className? `${styles.input} ${attrs.className}` : styles.input;
    
    if (attrs.readOnly)
        containerClassName += ' ' + styles.readOnly;
    if (attrs.disabled)
        containerClassName += ' ' + styles.disabled;

    return (
        <div className={containerClassName}>
            <input type="radio" {...attrs} />
            <label htmlFor={attrs.id} className={styles.label}>{text}</label>
        </div>
    );
};

export default View;