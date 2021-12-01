import {useSelector} from "react-redux";
import {useMemo, useState} from "react";
import {Intermediate} from "../utils/Intermediate/Intermediate";

export function useIntermediate(schema) {
    const pizzas = useSelector(state => state.pizzas);
    const [intermediate] = useState(() => new Intermediate(schema, pizzas));

    useMemo(() => {
        intermediate.pizzas = pizzas;
    }, [pizzas]);

    return intermediate;
}