export function createCardProps(schema, intermediate) {
    const {name, pizza, preview} = schema;
    const {optional} = intermediate.micro_snpts.snapshots[name];
    const {image} = preview;
    const {title} = pizza;

    return {
        title: title,
        image: image,
        optional: optional,
        info: intermediate.micro_snpts.infos[name],
        blur: true,
    };
}

export function resetCards() {
    return {};
}