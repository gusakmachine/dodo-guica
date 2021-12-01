import React, {useEffect, useRef} from 'react';
import styles from './Slider.module.css';

const moveSlider = (slider, focusedPosX, startPosX) => {
    slider.style.transform = `translate3d(${focusedPosX - startPosX}px,0px,0px)`;
}

const pullSlider = (slider, rect) => {
    slider.style.width = `${rect.width}px`;
};

const Slider = ({offset=0}) => {
    const slider = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            let focused = slider.current.parentElement.children[offset + 1];
            let startEl = slider.current.parentElement.children[1];
            let focusedRect = focused.getBoundingClientRect();
            let startElRect = startEl.getBoundingClientRect();

            pullSlider(slider.current, focusedRect);
            moveSlider(slider.current, focusedRect.x, startElRect.x);
        });
    });

    return <div className={styles.slider} ref={slider} />;
};

export default Slider;