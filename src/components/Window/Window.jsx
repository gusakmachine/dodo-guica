import React, {useEffect, useRef} from 'react';
import styles from './Window.module.css';
import {states, useWindow} from "../../hooks/useWindow/useWindow";

const Window = ({window}) => {
    const {state, content, hide} = useWindow(window);
    const modal = useRef(null);

    useEffect(() => {
        switch (state) {
            case states.HIDDEN:
                modal.current.classList.remove(states.VISIBLE);
                modal.current.classList.add(state);
                break;
            case states.VISIBLE:
                modal.current.classList.remove(states.HIDDEN);
                modal.current.classList.add(state);
                break;
        }
    });

    return (
        <div className={styles.window}>
            <div className={styles.modal} ref={modal}>
                <div className={styles.background} onClick={hide}/>
                {content}
            </div>
        </div>
    );
};

export default Window;