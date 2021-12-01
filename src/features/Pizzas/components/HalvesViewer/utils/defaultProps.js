export function getDefaultLeftProps() {
    return null;
}

export function getDefaultRightProps() {
    return null;
}

export function getDefaultProps() {
    return {
        left: getDefaultLeftProps(),
        right: getDefaultRightProps(),
    };
}