import Cart from "../../../../Cart/Cart";
import {set} from "../../../../../store/reducers/cartReducer";

export default function setToCart(dispatch, snapshot, intermediate, window) {
    const {_id, preview} = intermediate.schema;
    const {price} = snapshot;
    const {image} = preview;
    const selected = intermediate.selected;
    const doughs = snapshot.doughs[selected.doughs];
    const sizes = snapshot.sizes[selected.sizes];
    const {left, right} = intermediate.halves.schemas;

    if (!left || !right) {
        return;
    }

    dispatch(set({
        id: _id,
        title: `${left.pizza.title} + ${right.pizza.title}`,
        description: `${sizes.name}, ${doughs.name.toLowerCase()}, ${intermediate.info.weight} г`,
        src: image,
        price: price,
    }));

    window.show(<Cart window={window}/>);
}