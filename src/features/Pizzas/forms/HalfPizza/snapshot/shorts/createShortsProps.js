import {getSideName} from "../../utils/Halves/Halves";

export function createShortsProps(shorts, schemas) {
    const props = {};

    for (let key in shorts) {
        const side = getSideName(schemas, key);

        props[key] = {
            ...shorts[key],
            checked: side != null,
            side: side,
        };
    }

    return props;
}