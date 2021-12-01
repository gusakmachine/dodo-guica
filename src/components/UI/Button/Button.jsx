import React from 'react';
import styles from './Button.module.css';

const Button = ({children, ...attrs}) => {
    const onClick = attrs.onClick;

    attrs.onClick = (e) => {
        if (onClick)
            onClick(e);
    };
    attrs.className = attrs.className? `${attrs.className} ${styles.button}` : styles.button;

    return (
        <button {...attrs}>{children}</button>
    );
};

export default Button;