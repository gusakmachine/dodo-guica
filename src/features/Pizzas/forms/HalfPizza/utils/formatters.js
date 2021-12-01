import {strings} from "../../../localisation";

export function getCartButtonText(price) {
    if (price)
        return `${strings.ADD_TO_CART} ${strings.FOR} ${price}${strings.CURRENCY}`;
    return strings.ADD_TO_CART;
}