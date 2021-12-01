export class Halves {
    constructor() {
        this.schemas = {
            left: null,
            right: null,
        };
    }

    add(schema) {
        this.schemas = addHalf(this.schemas, schema);
    }

    get(side) {
        return this.schemas[side];
    }

    find(name) {
        return this.get(getSideName(this.schemas, name));
    }
}

export const SIDES = {
    left: 'left',
    right: 'right',
}

export function getSideName(state, name) {
    const {left, right} = state;

    if (left && left.name === name)
        return SIDES.left;
    if (right && right.name === name)
        return SIDES.right;

    return null;
}

export function addHalf(halves, schema) {
    const {name} = schema;
    const side = getSideName(halves, name);

    if (side != null) {
        return {
            ...halves,
            [side]: null,
        };
    }

    if (!halves.left) {
        return {
            left: schema,
            right: halves.right,
        };
    }

    if (!halves.right) {
        return {
            left: halves.left,
            right: schema,
        };
    }

    return {
        left: schema,
        right: null,
    };
}