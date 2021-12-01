import {useState} from "react";

export default function useForceUpdate() {
    const [counter, setCounter] = useState(0);
    return () => {
        setCounter(counter + 1);
    };
}