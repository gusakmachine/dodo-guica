import extractChecked from "../fields/extractChecked";
import {set} from "../../../../../store/reducers/cartReducer";
import Cart from "../../../../Cart/Cart";

export default function setToCart(dispatch, snapshot, id, window) {
    const {viewer, header, price, sizes} = snapshot
    const {src} = viewer;
    const {title, dough, weight, diameter} = header;
    const selected = extractChecked(snapshot);
    const size = sizes[selected.sizes];
    const {name} = size;

    dispatch(set({
        id: id,
        title: title,
        description: `${name}, ${dough}, ${weight} г, ${diameter} см,`,
        src: src,
        price: price,
    }));

    window.show(<Cart window={window}/>);
}