import React, {useEffect, useRef} from 'react';
import styles from './Scrollbar.module.css';

const Scrollbar = ({children, className='', scrollableClassName=''}) => {
    const slider = useRef(null);
    const container = useRef(null);
    let scrollHeight;
    let yMaxOffset;

    const onScroll = (e) => {
        let scrollTop = e.target.scrollTop;
        let contentScrollProgress = scrollTop / (scrollHeight / 100);
        let scrollProgress = (yMaxOffset / 100) * contentScrollProgress;

        slider.current.style.transform = `translate3d(0px,${scrollProgress}px,0px)`;
    };

    useEffect(() => {
        let parentElement = slider.current.parentElement;
        let parentHeight = parentElement.offsetHeight;
        let sliderHeight = parentHeight / 3;

        scrollHeight = container.current.scrollHeight - container.current.clientHeight;

        slider.current.style.height = `${sliderHeight}px`;
        yMaxOffset = parentHeight - sliderHeight;
    });

    return (
        <div className={className}>
            <div className={styles.container} onScroll={onScroll} ref={container}>
                <div className={`${scrollableClassName} ${styles.scrollable}`}>
                    {children}
                </div>
            </div>
            <div className={styles.scrollbar}>
                <div ref={slider} className={styles.slider}/>
            </div>
        </div>
    );
};

export default Scrollbar;