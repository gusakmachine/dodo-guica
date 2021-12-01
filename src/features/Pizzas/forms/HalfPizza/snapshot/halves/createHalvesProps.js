export function createHalvesViewerSideProps(schema) {
    const {name, preview} = schema;
    const {image} = preview;

    return {
        name: name,
        image
    };
}

export function resetHalves() {
    return {};
}
