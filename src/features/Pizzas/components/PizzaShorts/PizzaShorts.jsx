import PizzaShort from "./PizzaShort";
import merge from "deepmerge";

const PizzaShorts = ({shorts, sources}) => {
    let pizzas = [];

    for (let value in shorts) {
        if (!sources[value])
            continue;

        let {_id, pizza, preview, checked, onChange, side} = merge(sources[value], shorts[value]);
        let {title} = pizza;
        let {description, image, price} = preview;

        pizzas.push(
            <PizzaShort
                key={_id}
                id={_id}
                title={title}
                description={description}
                image={image}
                price={price}
                checked={!!checked}
                onChange={onChange}
                side={side}
            />
        );
    }

    return pizzas;
};

export default PizzaShorts;