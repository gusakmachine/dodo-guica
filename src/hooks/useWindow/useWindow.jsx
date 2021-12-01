import React, {useMemo, useState} from "react";

export const states = {
    HIDDEN: 'hidden',
    VISIBLE: 'visible',
};

export function useWindow(window) {
    const [content, setContent] = useState();
    const [state, setState] = useState();

    window.content = content;
    window.state = state;

    useMemo(() => {
        window.show = (content) => {
            setContent({...content});
            setState(states.VISIBLE);
        };
        window.hide = () => {
            setState(states.HIDDEN);
        };
    }, [window]);

    return window;
}