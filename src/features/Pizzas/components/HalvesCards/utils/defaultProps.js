import {strings} from "../../../localisation";

export function getDefaultLeftProps() {
    return {
        image: 'https://dodopizza.ru/dist/fdb09565b56cb9ae35ac.svg',
        alt: strings.HALF_PIZZA_CONSTRUCTOR,
        title: strings.HALF_PIZZA_SELECT_LEFT_SIDE,
        optional: {},
        info: {},
    };
}

export function getDefaultRightProps() {
    return {
        image: 'https://dodopizza.ru/dist/fdb09565b56cb9ae35ac.svg',
        alt: strings.HALF_PIZZA_CONSTRUCTOR,
        title: strings.HALF_PIZZA_SELECT_RIGHT_SIDE,
        optional: {},
        info: {},
    };
}

export function getDefaultProps() {
    return {
        left: getDefaultLeftProps(),
        right: getDefaultRightProps(),
    };
}